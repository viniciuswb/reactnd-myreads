import React from 'react'
import './BookShelfListItem.css'
import BookList from '../../BookList'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'

const BookShelf = ({title, books, onBookShelfChange}) => {
  return (
    <div className="bookshelf">
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={`${title} (${books.length})`}/>
        </ToolbarGroup>
      </Toolbar>
      <div className="bookshelf-books">
        <BookList books={books} onBookShelfChange={onBookShelfChange}/>
      </div>
    </div>
  )
}

export default BookShelf