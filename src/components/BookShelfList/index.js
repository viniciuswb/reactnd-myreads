import React from 'react'

import BookShelfListItem from './BookShelfListItem'

import {FloatingActionButton} from 'material-ui'
import AddIcon from 'material-ui/svg-icons/content/add'
import './BookShelfList.css'

const BookShelfList = ({shelfs, loading, books, bookShelfChange, history, bookLoader, updatedBook, modalToggle}) => {
  return (
    <div className="list-books">
      <div className="list-books-content">
        {
          shelfs.map(
            (shelf, index) => (
              <BookShelfListItem
                shelfs={shelfs}
                key={index}
                title={shelf.name}
                loading={loading}
                books={books.filter(book => book.shelf === shelf.type)}
                onBookShelfChange={bookShelfChange}
                updatedBook={updatedBook}
                bookLoader={bookLoader}
                modalToggle={modalToggle}
              />
            ))
        }
      </div>
      <div className="open-search">
        <FloatingActionButton
          className="book-shelf-changer"
          backgroundColor="#1e5a9f"
          onClick={() => history.push('/search', {books: books})}
        >
          <AddIcon/>
        </FloatingActionButton>
      </div>
    </div>
  )
}


export default BookShelfList