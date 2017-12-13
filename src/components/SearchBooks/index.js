import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './SearchBooks.css'
import BookListItem from "../BookList/BookListItem"

import Loader from "../UI/Loader"
import Toolbar from "../UI/Toolbar"

class SearchBooks extends Component {
  componentWillUnmount() {
    this.props.getSearchedBooks([])
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
              onChange={this.props.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">

          <Toolbar text={`Search Results (${this.props.searchedBooks.length})`} />

          { this.props.loading && (<Loader loaderClass="loader" size={80} top={0} left={10} />) }

          {
            this.props.searchedBooks.length > 0 && !this.props.loading && (
              <ol className="books-grid">
                {this.props.searchedBooks.map((book, index) => (
                  <BookListItem
                    key={index}
                    book={book}
                    bookLoader={this.props.updatedBook === book ? this.props.bookLoader : false}
                    shelf={this.props.bookShelfType(book)}
                    onBookShelfChange={this.props.bookShelfChange}
                  />
                ))}
              </ol>
            )
          }

          {
            this.props.searchedBooks.length < 1 && !this.props.loading && (
              <div className="no-books">
                <p>No books available</p>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default SearchBooks