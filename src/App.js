import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import BookShelfList from './components/BookShelfList'
import SearchBooks from './components/SearchBooks'
import BookDetails from "./components/BookDetails"
import AppBar from './components/UI/AppBar'
import Backdrop from "./components/UI/BackDrop"

import {get, getAll, update, search} from "./utils/BooksAPI"
import If from "./hoc/If"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css'

class App extends Component {
  state = {
    shelfList: [
      {name: 'Currently Reading', type: 'currentlyReading'},
      {name: 'Want to Read', type: 'wantToRead'},
      {name: 'Read', type: 'read'}
    ],
    bookList: [],
    book: null,
    searchedBooks: [],
    updatedBook: null,
    loading: true,
    bookLoader: false,
    detailsLoader: false,
    modalOpen: false
  }

  componentDidMount() {
    getAll().then(books => {
      this.setBookList(books)
      this.changeLoading(false)
    })
  }

  setBookList = (bookList) => {
    this.setState({bookList})
  }

  setSearchedBooks = (searchedBooks) => {
    this.setState({searchedBooks})
  }

  setUpdatedBook = (updatedBook) => {
    this.setState({updatedBook})
  }

  changeLoading = (status) => {
    this.setState({loading: status})
  }

  changeBookLoader = (status) => {
    this.setState({bookLoader: status})
  }

  bookShelfChange = (book, shelf) => {
    this.changeBookLoader(true)
    this.setUpdatedBook(book)

    update(book, shelf).then(() => {
      book.shelf = shelf
      let updatedBooks = this.state.bookList.filter(bk => bk.id !== book.id)
      updatedBooks.push(book)
      this.setState({bookList: updatedBooks})
      this.changeBookLoader(false)
    })
  }

  bookShelfType = (shearchedBook) => {
    const bookShelf = this.state.bookList
      .find(shelfBook =>
        shelfBook.id === shearchedBook.id
      )
    return bookShelf ? bookShelf.shelf : 'none'
  }

  searchBooks = ({target}) => {
    this.changeLoading(true)
    let searchText = target.value || ' '
    search(searchText).then(books => {
      this.setSearchedBooks(books.error ? [] : books)
      this.changeLoading(false)
    })
  }

  handleModalOpen = (bookId) => {
    this.setState({detailsLoader: true})
    get(bookId).then(book => {
      this.setState({
        book,
        modalOpen: true,
        detailsLoader: false
      })
    })
  }

  handleModalClose = () => {
    this.setState({
      modalOpen: false
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <Backdrop show={this.state.detailsLoader} />
          <If test={this.state.modalOpen}>
            <BookDetails
              modalClose={this.handleModalClose}
              modalOpen={this.state.modalOpen}
              book={this.state.book}
            />
          </If>

          <Route path="/" component={AppBar} />
          <Route exact path="/" render={props =>
            <BookShelfList
              {...props}
              shelfs={this.state.shelfList}
              books={this.state.bookList}
              loading={this.state.loading}
              updatedBook={this.state.updatedBook}
              bookLoader={this.state.bookLoader}
              changeLoading={this.changeLoading}
              getBooks={this.setBookList}
              bookShelfChange={this.bookShelfChange}
              modalToggle={this.handleModalOpen}
            />
          }/>
          <Route path="/search" render={props =>
            <SearchBooks
              {...props}
              shelfs={this.state.shelfList}
              searchedBooks={this.state.searchedBooks}
              loading={this.state.loading}
              books={this.state.bookList}
              updatedBook={this.state.updatedBook}
              bookLoader={this.state.bookLoader}
              changeLoading={this.changeLoading}
              getSearchedBooks={this.setSearchedBooks}
              setUpdatedBook={this.setUpdatedBook}
              changeBookLoader={this.changeBookLoader}
              bookShelfChange={this.bookShelfChange}
              bookShelfType={this.bookShelfType}
              searchBooks={this.searchBooks}
              modalToggle={this.handleModalOpen}
            />
          }/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
