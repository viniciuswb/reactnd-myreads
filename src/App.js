import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from './components/UI/AppBar'
import BookShelfList from './components/BookShelfList'
import SearchBooks from './components/SearchBooks'
import './App.css'
import {getAll, search, update} from "./utils/BooksAPI"

class App extends Component {
  state = {
    shelfs: [
      {name: 'Currently Reading', type: 'currentlyReading'},
      {name: 'Want to Read', type: 'wantToRead'},
      {name: 'Read', type: 'read'}
    ],
    books: [],
    searchedBooks: [],
    updatedBook: null,
    loading: false,
    bookLoader: false
  }

  componentDidMount() {
    getAll().then(books => {
      this.getBooks(books)
      this.changeLoading(false)
    })
  }

  changeLoading = (status) => {
    this.setState({ loading: status })
  }

  changeBookLoader = (status) => {
    this.setState({ bookLoader: status })
  }

  getBooks = (books) => {
    this.setState({ books })
  }

  getSearchedBooks = (searchedBooks) => {
    this.setState({ searchedBooks })
  }

  setUpdatedBook = (updatedBook) => {
    this.setState({updatedBook})
  }

  bookShelfChange = (book, shelf) => {
    this.changeBookLoader(true)
    this.setUpdatedBook(book)

    update(book, shelf).then(() => {
      book.shelf = shelf
      let updatedBooks = this.state.books.filter(bk => bk.id !== book.id)
      updatedBooks.push(book)
      this.setState({books: updatedBooks})
      this.changeBookLoader(false)
    })
  }

  bookShelfType = (shearchedBook) => {
    const bookShelf = this.state.books
      .find(shelfBook =>
        shelfBook.id === shearchedBook.id
      )
    return bookShelf ? bookShelf.shelf : 'none'
  }

  searchBooks = ({target}) => {
    this.changeLoading(true)
    let searchText = target.value || ' '
    search(searchText).then(books => {
      this.getSearchedBooks(books.error ? [] : books)
      this.changeLoading(false)
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <Route path="/" component={AppBar} />
          <Route exact path="/" render={props =>
            <BookShelfList
              {...props}
              shelfs={this.state.shelfs}
              books={this.state.books}
              loading={this.state.loading}
              changeLoading={this.changeLoading}
              getBooks={this.getBooks}
              bookShelfChange={this.bookShelfChange}
            />
          }/>
          <Route path="/search" render={props =>
            <SearchBooks
              {...props}
              searchedBooks={this.state.searchedBooks}
              loading={this.state.loading}
              books={this.state.books}
              updatedBook={this.state.updatedBook}
              bookLoader={this.state.bookLoader}
              changeLoading={this.changeLoading}
              getSearchedBooks={this.getSearchedBooks}
              setUpdatedBook={this.setUpdatedBook}
              changeBookLoader={this.changeBookLoader}
              bookShelfChange={this.bookShelfChange}
              bookShelfType={this.bookShelfType}
              searchBooks={this.searchBooks}
            />
          }/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
