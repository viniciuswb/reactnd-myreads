import React from 'react'
import BookShelfChanger from '../../BookShelfChanger'
import './BookListItem.css'
import 'hover.css/css/hover-min.css'
import Loader from "../../UI/Loader"
import If from "../../../hoc/If"
import InfoIcon from 'material-ui/svg-icons/action/info'
import FlatButton from "../../UI/FlatButton"

const BookListItem = ({book, onBookShelfChange, shelf, bookLoader, shelfs}) => {
  let image = book.imageLinks ? book.imageLinks.thumbnail : ''
  let authors = book.authors ? book.authors.join(', ') : []
  let title = book.title ? book.title : ''
  let _shelf = book.shelf ? book.shelf : shelf
  let loader = bookLoader ? bookLoader : false

  return (
    <li className="book-item">
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${image})`
          }}>
            <div className="book-hover hvr-shutter-in-vertical">
              <FlatButton
                icon={<InfoIcon/>}
                label="Detalhes"
              />
            </div>
            <If test={loader}>
              <Loader loaderClass="loader-cover" size={60} top={66} left={0} />
            </If>
          </div>
          <BookShelfChanger
            book={book}
            shelf={_shelf}
            onBookShelfChange={onBookShelfChange}
            shelfs={shelfs}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  )
}

export default BookListItem