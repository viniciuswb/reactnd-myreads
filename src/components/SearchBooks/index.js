import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {search, update} from "../../utils/BooksAPI"
import './SearchBooks.css'
import BookListItem from "../BookList/BookListItem"
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
import {RefreshIndicator} from 'material-ui'

class SearchBooks extends Component {
  state = {
    books: [],
    loading: false,
    updatedBook: null,
    bookLoader: false
  }

  searchBooks = ({target}) => {
    this.setState({
      loading: true
    })
    let searchText = target.value || ' '
    search(searchText).then(books => {
      this.setState({
        books: books.error ? [] : books,
        loading: false
      })
    })
  }

  bookShelfChange = (book, shelf) => {
    this.setState({
      bookLoader: true,
      updatedBook: book
    })
    update(book, shelf).then(() => {
      book.shelf = shelf
      let updatedBooks = this.state.books.filter(bk => bk.id !== book.id)
      let bookIndex = this.state.books.findIndex(bk => bk.id === book.id)
      updatedBooks.splice(bookIndex, 0, book)
      this.setState({
        books: updatedBooks,
        bookLoader: false
      })
    })
  }

  bookShelfType = (shearchedBook) => {
    const bookShelf = this.props.location.state.books
      .find(shelfBook =>
        shelfBook.id === shearchedBook.id
      )
    return bookShelf ? bookShelf.shelf : 'none'
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
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text={`Search Results (${this.state.books.length})`}/>
            </ToolbarGroup>
          </Toolbar>

          {
            this.state.loading && (
              <div className="loader">
                <RefreshIndicator
                  size={80}
                  left={10}
                  top={0}
                  status="loading"
                  style={{
                    display: 'inline-block',
                    position: 'relative'
                  }}
                />
              </div>
            )
          }

          {
            this.state.books.length > 0 && !this.state.loading && (
              <ol className="books-grid">
                {this.state.books.map((book, index) => (
                  <BookListItem
                    key={index}
                    book={book}
                    bookLoader={this.state.updatedBook === book ? this.state.bookLoader : false}
                    shelf={this.bookShelfType(book)}
                    onBookShelfChange={this.bookShelfChange}
                  />
                ))}
              </ol>
            )
          }

          {
            this.state.books.length < 1 && !this.state.loading && (
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