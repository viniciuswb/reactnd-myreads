import React from 'react'
import BookListItem from './BookListItem/BookListItem'
import './BookList.css'

const BooksListItem = ({books}) => {
  return (
    <ol className="books-grid">
      {books.map((book, index) => (
        <BookListItem
          key={index}
          book={book}
        />
      ))}
    </ol>
  )
}

export default BooksListItem