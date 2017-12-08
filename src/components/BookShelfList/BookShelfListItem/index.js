import React from 'react'
import './BookShelfListItem.css'
import BookList from '../../BookList'

const BookShelf = ({title, books, onBookShelfChange}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList books={books} onBookShelfChange={onBookShelfChange} />
      </div>
    </div>
  )
}

export default BookShelf