import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {search, update} from "../../utils/BooksAPI"
import './SearchBooks.css'
import BookListItem from "../BookList/BookListItem"

class SearchBooks extends Component {
  state = {
    books: []
  }

  searchBooks = ({target}) => {

    let searchText = target.value || ' '

    search(searchText).then(books => {
      this.setState({
        books: books.error ? [] : books
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
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book, index) => (
              <BookListItem
                key={index}
                book={book}
                onBookShelfChange={this.bookShelfChange}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks