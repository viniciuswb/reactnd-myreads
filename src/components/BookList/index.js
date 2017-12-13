import React from 'react'
import BookListItem from './BookListItem'
import './BookList.css'

const BooksListItem = ({books, onBookShelfChange, updatedBook, bookLoader}) => {
  return (
    <ol className="books-grid">
      {books.map((book, index) => (
        <BookListItem
          key={index}
          book={book}
          onBookShelfChange={onBookShelfChange}
          bookLoader={updatedBook === book ? bookLoader : false}
        />
      ))}
    </ol>
  )
}

export default BooksListItem