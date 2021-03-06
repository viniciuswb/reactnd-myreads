import React, {Component} from 'react'

import BookListItem from "../BookList/BookListItem"
import Loader from "../UI/Loader"
import Toolbar from "../UI/Toolbar"
import SearchBar from "../UI/SearchBar"
import NoBooks from "../UI/NoBooks"

import If from "../../hoc/If"

import './SearchBooks.css'

class SearchBooks extends Component {
  componentWillUnmount() {
    this.props.getSearchedBooks([])
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar
          searchBooks={this.props.searchBooks}
          placeHolder="Search by title or author"
        />

        <div className="search-books-results">
          <Toolbar text={`Search Results (${this.props.searchedBooks.length})`} />

          <If test={this.props.loading}>
            <Loader loaderClass="loader" size={80} top={0} left={10} />
          </If>

          <If test={this.props.searchedBooks.length > 0 && !this.props.loading}>
            <ol className="books-grid">
              {this.props.searchedBooks.map((book, index) => (
                <BookListItem
                  shelfs={this.props.shelfs}
                  key={index}
                  book={book}
                  bookLoader={this.props.updatedBook === book ? this.props.bookLoader : false}
                  shelf={this.props.bookShelfType(book)}
                  onBookShelfChange={this.props.bookShelfChange}
                  modalToggle={this.props.modalToggle}
                />
              ))}
            </ol>
          </If>

          <If test={this.props.searchedBooks.length < 1 && !this.props.loading}>
            <NoBooks />
          </If>
        </div>
      </div>
    )
  }
}

export default SearchBooks