import React from 'react'
import {SelectField, MenuItem, FloatingActionButton} from 'material-ui'
import './BookShelfChanger.css'

const BookShelfChanger = ({book, onBookShelfChange}) => {
  return (
    <FloatingActionButton
      className="book-shelf-changer"
      mini={true}
      backgroundColor="#1e5a9f"
    >
      <div className="book-shelf-changer-icon">
        <SelectField
          className="book-shelf-changer-select"
          autoWidth={true}
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
    </FloatingActionButton>
  )
}

export default BookShelfChanger