import React, {Component} from 'react'
import {getAll, update} from '../../utils/BooksAPI'
import BookShelfListItem from './BookShelfListItem'
import './BookShelfList.css'

class BookShelfList extends Component {
  state = {
    shelfs: [
      { name: 'Currently Reading', type: 'currentlyReading' },
      { name: 'Want to Read', type: 'wantToRead' },
      { name: 'Read', type: 'read' }
    ],
    books: []
  }

  componentDidMount() {
    getAll().then(books => {
      this.setState({books})
    })
  }

  bookShelfChange = (book, shelf) => {
    update(book, shelf).then(() => {
      book.shelf = shelf
      let updatedBooks = this.state.books.filter(bk => bk.id !== book.id)
      updatedBooks.push(book)
      this.setState({books: updatedBooks})
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-content">
          {
            this.state.shelfs.map(
              (shelf, index) => (
                <BookShelfListItem
                  key={index}
                  title={shelf.name}
                  books={this.state.books.filter(book => book.shelf === shelf.type)}
                  onBookShelfChange={this.bookShelfChange}
                />
              ))
          }
        </div>
        <div className="open-search">
          <a>Add a book</a>
        </div>
      </div>
    )
  }
}

export default BookShelfList