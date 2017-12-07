import React from 'react'
import './BookShelf.css'
import BooksList from '../Books/BooksList'

const BookShelf = ({title}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BooksList />
      </div>
    </div>
  )
}

export default BookShelf