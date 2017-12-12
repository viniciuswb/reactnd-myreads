import React from 'react'
import './BookShelfListItem.css'
import BookList from '../../BookList'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
import {RefreshIndicator} from 'material-ui'

const BookShelf = ({title, books, onBookShelfChange, loading}) => {
  return (
    <div className="bookshelf">
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={`${title} (${books.length})`}/>
        </ToolbarGroup>
      </Toolbar>
      {
        loading && (
          <div className="loader">
            <RefreshIndicator
              size={80}
              left={10}
              top={0}
              status="loading"
              style={{
                display: 'inline-block',
                position: 'relative'
              }}
            />
          </div>
        )
      }
      <div className="bookshelf-books">
        <BookList books={books} onBookShelfChange={onBookShelfChange}/>
      </div>
    </div>
  )
}

export default BookShelf