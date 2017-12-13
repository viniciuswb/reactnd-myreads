import React from 'react'
import './BookShelfListItem.css'
import BookList from '../../BookList'
import Loader from "../../UI/Loader"
import Toolbar from "../../UI/Toolbar"
import If from "../../../hoc/If"

const BookShelf = ({title, books, onBookShelfChange, loading, updatedBook, bookLoader, shelfs}) => {
  return (
    <div className="bookshelf">
      <Toolbar text={`${title} (${books.length})`} />
      <If test={loading}>
        <Loader loaderClass="loader" size={80} top={0} left={10} />
      </If>

      <div className="bookshelf-books">
        <BookList
          books={books}
          onBookShelfChange={onBookShelfChange}
          updatedBook={updatedBook}
          bookLoader={bookLoader}
          shelfs={shelfs}
        />
      </div>
    </div>
  )
}

export default BookShelf