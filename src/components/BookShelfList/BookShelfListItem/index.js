import React from 'react'
import './BookShelfListItem.css'
import BookList from '../../BookList'
import Loader from "../../UI/Loader"
import Toolbar from "../../UI/Toolbar"

const BookShelf = ({title, books, onBookShelfChange, loading, updatedBook, bookLoader}) => {
  return (
    <div className="bookshelf">
      <Toolbar text={`${title} (${books.length})`} />
      { loading && (<Loader loaderClass="loader" size={80} top={0} left={10} />) }
      <div className="bookshelf-books">
        <BookList
          books={books}
          onBookShelfChange={onBookShelfChange}
          updatedBook={updatedBook}
          bookLoader={bookLoader}
        />
      </div>
    </div>
  )
}

export default BookShelf