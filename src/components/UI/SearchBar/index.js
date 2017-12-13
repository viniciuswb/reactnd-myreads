import React from 'react'
import {Link} from 'react-router-dom'
import './SearchBar.css'

const SearchBar = ({searchBooks, placeHolder}) => (
  <div className="search-books-bar">
    <Link to="/" className="close-search">Close</Link>
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder={placeHolder}
        onChange={searchBooks}
      />
    </div>
  </div>
)

export default SearchBar