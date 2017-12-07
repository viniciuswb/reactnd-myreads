import React from 'react'
import './BookShelf.css'

const BookShelf = ({title}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
    </div>
  )
}

export default BookShelf