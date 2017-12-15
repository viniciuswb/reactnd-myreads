import React from 'react'
import {MenuItem} from 'material-ui'
import './BookShelfChanger.css'
import IconMenu from "../UI/IconMenu"

const BookShelfChanger = ({book, onBookShelfChange, shelf, shelfs}) => {
  return (
    <div className="book-shelf-changer-select">
      <IconMenu
        value={shelf}
        change={(event, value) => onBookShelfChange(book, value)}
      >
        <MenuItem key="none" value="none" primaryText="Move to..." disabled/>
        { shelfs.map(shelf => <MenuItem key={shelf.type} value={shelf.type} primaryText={shelf.name} />) }
        <MenuItem key="none2" value="none" primaryText="None"/>
      </IconMenu>
    </div>
  )
}

export default BookShelfChanger