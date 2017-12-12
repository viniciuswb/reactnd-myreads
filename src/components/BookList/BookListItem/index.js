import React from 'react'
import BookShelfChanger from '../../BookShelfChanger'
import './BookListItem.css'

const BookListItem = ({book, onBookShelfChange, shelf}) => {
  let image = book.imageLinks ? book.imageLinks.thumbnail : ''
  let authors = book.authors ? book.authors.join(', ') : []
  let title = book.title ? book.title : ''
  let _shelf = book.shelf ? book.shelf : shelf

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
            shelf={_shelf}
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