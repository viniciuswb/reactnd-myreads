import React from 'react'

import BookListItem from './BookListItem'

import './BookList.css'

const BooksListItem = ({books, onBookShelfChange, updatedBook, bookLoader, shelfs, modalToggle}) => {
  return (
    <ol className="books-grid">
      {books.map((book, index) => (
        <BookListItem
          key={index}
          book={book}
          onBookShelfChange={onBookShelfChange}
          bookLoader={updatedBook === book ? bookLoader : false}
          shelfs={shelfs}
          modalToggle={modalToggle}
        />
      ))}
    </ol>
  )
}

export default BooksListItem