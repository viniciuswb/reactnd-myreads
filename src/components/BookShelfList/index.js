import React, {Component} from 'react'
import {FloatingActionButton} from 'material-ui'
import AddIcon from 'material-ui/svg-icons/content/add'
import {getAll, update} from '../../utils/BooksAPI'
import BookShelfListItem from './BookShelfListItem'
import './BookShelfList.css'

class BookShelfList extends Component {
  state = {
    shelfs: [
      {name: 'Currently Reading', type: 'currentlyReading'},
      {name: 'Want to Read', type: 'wantToRead'},
      {name: 'Read', type: 'read'}
    ],
    books: [],
    loading: true
  }

  componentDidMount() {
    getAll().then(books => {
      this.setState({
        books,
        loading: false
      })
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
                  loading={this.state.loading}
                  books={this.state.books.filter(book => book.shelf === shelf.type)}
                  onBookShelfChange={this.bookShelfChange}
                />
              ))
          }
        </div>
        <div className="open-search">
          <FloatingActionButton
            className="book-shelf-changer"
            backgroundColor="#1e5a9f"
            onClick={() => this.props.history.push('/search', {books: this.state.books})}
          >
            <AddIcon/>
          </FloatingActionButton>
        </div>
      </div>
    )
  }
}

export default BookShelfList