import React from 'react'
import BookListItem from './BookListItem/BookListItem'
import './BookList.css'

const BooksListItem = () => {
  return (
    <ol className="books-grid">
      <BookListItem/>
    </ol>
  )
}

export default BooksListItem