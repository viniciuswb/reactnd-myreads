import React from 'react'
import './BookShelf.css'
import BookList from '../BookList/BookList'

const BookShelf = ({title}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList />
      </div>
    </div>
  )
}

export default BookShelf