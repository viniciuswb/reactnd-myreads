import React from 'react'
import './BookShelf.css'
import BookList from '../BookList/BookList'

const BookShelf = ({title, books}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList books={books} />
      </div>
    </div>
  )
}

export default BookShelf