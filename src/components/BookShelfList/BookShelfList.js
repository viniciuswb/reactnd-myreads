import React, {Component} from 'react'
import {getAll} from '../../utils/BooksAPI'
import BookShelf from './BookShelf/BookShelf'
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

  render() {
    return (
      <div className="list-books">
        <div className="list-books-content">
          {
            this.state.shelfs.map(
              (shelf, index) => (
                <BookShelf
                  key={index}
                  title={shelf.name}
                  books={this.state.books.filter(book => book.shelf === shelf.type)}
                />
              ))
          }
        </div>
      </div>
    )
  }
}

export default BookShelfList