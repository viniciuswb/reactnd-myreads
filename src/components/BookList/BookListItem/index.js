import React from 'react'
import BookShelfChanger from '../../BookShelfChanger'
import './BookListItem.css'

const BookListItem = ({book, onBookShelfChange}) => {
  let image = book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ''
  let authors = book.authors ? book.authors.join(', ') : []
  let title = book.title ? book.title : ''
  return (
    <li className="book-item">
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${image})`
          }} />
          <BookShelfChanger
            book={book}
            shelf={book.shelf}
            onBookShelfChange={onBookShelfChange}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  )
}

export default BookListItem