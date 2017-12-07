import React from 'react'
import BookListItem from './BookListItem/BookListItem'
import './BookList.css'

const BooksListItem = ({books}) => {
  return (
    <ol className="books-grid">
      {books.map((book, index) => (
        <BookListItem
          key={index}
          title={book.title}
          image={book.imageLinks.thumbnail}
          authors={book.authors}
          shelf={book.shelf}
        />
      ))}
    </ol>
  )
}

export default BooksListItem