import React from 'react'
import './BookShelfChanger.css'

const BookShelfChanger = ({book, onBookShelfChange}) => {
  return (
    <div className="book-shelf-changer">
      <select value={book.shelf} onChange={(e) => onBookShelfChange(book, e.target.value)}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default BookShelfChanger