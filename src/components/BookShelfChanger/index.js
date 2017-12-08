import React from 'react'
import {SelectField, MenuItem} from 'material-ui'
import './BookShelfChanger.css'

const BookShelfChanger = ({book, onBookShelfChange}) => {
  return (
    <div className="book-shelf-changer">
      <SelectField
        className="book-shelf-changer-select"
        value={book.shelf}
        onChange={
          (event, index, value) => onBookShelfChange(book, value)
        }
      >
        <MenuItem value="none" primaryText="Move to..." disabled/>
        <MenuItem value="currentlyReading" primaryText="Currently Reading"/>
        <MenuItem value="wantToRead" primaryText="Want to Read"/>
        <MenuItem value="read" primaryText="Read"/>
        <MenuItem value="none" primaryText="None"/>
      </SelectField>
    </div>
  )
}

export default BookShelfChanger