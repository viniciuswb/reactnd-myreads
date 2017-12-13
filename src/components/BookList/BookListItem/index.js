import React from 'react'
import BookShelfChanger from '../../BookShelfChanger'
import './BookListItem.css'
import {RefreshIndicator} from 'material-ui'

const BookListItem = ({book, onBookShelfChange, shelf, bookLoader}) => {
  let image = book.imageLinks ? book.imageLinks.thumbnail : ''
  let authors = book.authors ? book.authors.join(', ') : []
  let title = book.title ? book.title : ''
  let _shelf = book.shelf ? book.shelf : shelf
  let loader = bookLoader ? bookLoader : false

  return (
    <li className="book-item">
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${image})`
          }}>
            {
              loader && (
                <div className="loader-cover">
                  <RefreshIndicator
                    size={60}
                    left={0}
                    top={66}
                    status="loading"
                    style={{
                      display: 'inline-block',
                      position: 'relative'
                    }}
                  />
                </div>
              )
            }
          </div>
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