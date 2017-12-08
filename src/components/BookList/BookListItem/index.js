import React from 'react'
import BookShelfChanger from '../../BookShelfChanger'
import './BookListItem.css'

const BookListItem = ({book, onBookShelfChange}) => {
  return (
    <li className="book-item">
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
          }} />
          <BookShelfChanger book={book} onBookShelfChange={onBookShelfChange}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(', ')}</div>
      </div>
    </li>
  )
}

export default BookListItem