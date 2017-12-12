import React from 'react'
import {IconMenu, MenuItem, FloatingActionButton} from 'material-ui'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import './BookShelfChanger.css'

const BookShelfChanger = ({book, onBookShelfChange}) => {
  return (
    <div className="book-shelf-changer-select">
      <IconMenu
        style={{
          position: 'absolute',
          right: 0,
          bottom: '-10px'
        }}
        iconButtonElement={
          <FloatingActionButton
            mini={true}
            backgroundColor="#1e5a9f"
          >
            <NavigationExpandMoreIcon/>
          </FloatingActionButton>
        }
        value={book.shelf}
        onChange={
          (event, value) => onBookShelfChange(book, value)
        }
        selectedMenuItemStyle={{color: '#1e5a9f'}}
      >
        <MenuItem value="none" primaryText="Move to..." disabled/>
        <MenuItem value="currentlyReading" primaryText="Currently Reading"/>
        <MenuItem value="wantToRead" primaryText="Want to Read"/>
        <MenuItem value="read" primaryText="Read"/>
        <MenuItem value="none" primaryText="None"/>
      </IconMenu>
    </div>
  )
}

export default BookShelfChanger