import React from 'react'
import {Dialog, FlatButton} from 'material-ui'
import ReactStars from 'react-stars'
import './BookDetails.css'

const Modal = ({modalClose, modalOpen, book}) => {
  const actions = [
    <FlatButton
      label="Close"
      primary={true}
      onClick={modalClose}
    />
  ]

  return (
    <Dialog
      className="book-details"
      actions={actions}
      modal={true}
      open={modalOpen}
      autoScrollBodyContent={true}
    >
      <div>
        <h3>{book.title}</h3>
        <h4>{book.subtitle}</h4>
        <img className="book-detail-cover" src={book.imageLinks.thumbnail} alt="Book cover"/>
        <div className="book-ratings">
          <ReactStars
            count={5}
            value={book.averageRating}
            size={18}
            edit={false}
            color2={'#ffd700'}
            className="book-ratings-stars"
          />
          <p className="book-ratings-count">({book.ratingsCount ? book.ratingsCount : 0})</p>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal