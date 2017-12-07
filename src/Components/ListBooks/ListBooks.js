import React from 'react'

import './ListBooks.css'

const ListBooks = () => {
  return (
    <div className="list-books">
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
        </div>
      </div>
    </div>
  )
}

export default ListBooks