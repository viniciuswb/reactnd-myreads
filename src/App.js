import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from './components/UI/AppBar'
import BookShelfList from './components/BookShelfList'
import SearchBooks from './components/SearchBooks'
import './App.css'
import {getAll, search, update, get} from "./utils/BooksAPI"
import BookDetails from "./components/BookDetails"
import If from "./hoc/If"
import Backdrop from "./components/UI/BackDrop"

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
    loading: true,
    bookLoader: false,
    detailsLoader: false,
    modalOpen: false,
    book: null
  }

  componentDidMount() {
    getAll().then(books => {
      this.getBooks(books)
      this.changeLoading(false)
    })
  }

  changeLoading = (status) => {
    this.setState({loading: status})
  }

  changeBookLoader = (status) => {
    this.setState({bookLoader: status})
  }

  getBooks = (books) => {
    this.setState({books})
  }

  getSearchedBooks = (searchedBooks) => {
    this.setState({searchedBooks})
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

          <Route path="/" component={AppBar}/>
          <Route exact path="/" render={props =>
            <BookShelfList
              {...props}
              shelfs={this.state.shelfs}
              books={this.state.books}
              loading={this.state.loading}
              updatedBook={this.state.updatedBook}
              bookLoader={this.state.bookLoader}
              changeLoading={this.changeLoading}
              getBooks={this.getBooks}
              bookShelfChange={this.bookShelfChange}
              modalToggle={this.handleModalOpen}
            />
          }/>
          <Route path="/search" render={props =>
            <SearchBooks
              {...props}
              shelfs={this.state.shelfs}
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
              modalToggle={this.handleModalOpen}
            />
          }/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
