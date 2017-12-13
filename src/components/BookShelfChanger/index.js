import React from 'react'
import {IconMenu, MenuItem, FloatingActionButton} from 'material-ui'
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import './BookShelfChanger.css'

const BookShelfChanger = ({book, onBookShelfChange, shelf, shelfs}) => {
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
            <ArrowDown/>
          </FloatingActionButton>
        }
        value={shelf}
        onChange={
          (event, value) => onBookShelfChange(book, value)
        }
        selectedMenuItemStyle={{color: '#1e5a9f'}}
      >
        <MenuItem value="none" primaryText="Move to..." disabled/>
        { shelfs.map(shelf => <MenuItem value={shelf.type} primaryText={shelf.name} />) }
        <MenuItem value="none" primaryText="None"/>
      </IconMenu>
    </div>
  )
}

export default BookShelfChanger