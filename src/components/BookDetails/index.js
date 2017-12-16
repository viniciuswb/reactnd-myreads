import React from 'react'
import {Dialog, FlatButton} from 'material-ui'
import ReactStars from 'react-stars'
import './BookDetails.css'
import If from "../../hoc/If"

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
        <div className="book-details-grid">
          <div className="book-details-grid-item">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              margin: '0 auto',
              position: 'relative',
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}/>
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
          <div className="book-details-grid-item">
            <div className="book-detaill-item">
              <If test={book.authors.length === 1}>
                <span>Author:</span> <br/> {book.authors}
              </If>
              <If test={book.authors.length > 1}>
                <span>Authors:</span> <br/> {book.authors.join(', ')}
              </If>
            </div>
            <div className="book-detaill-item">
              <If test={book.publisher}>
                <span>Publisher:</span> <br/> {book.publisher}
              </If>
            </div>
            <div className="book-detaill-item">
              <If test={book.publishedDate}>
                <span>Published Date:</span> <br/> {book.publishedDate}
              </If>
            </div>
            <div className="book-detaill-item">
              <If test={book.pageCount}>
                <span>Pages:</span> <br/> {book.pageCount}
              </If>
            </div>
            <div className="book-detaill-item">
              <If test={book.categories.length === 1}>
                <span>Category:</span> <br/> {book.categories}
              </If>
              <If test={book.categories.length > 1}>
                <span>Categories:</span> <br/> {book.categories.join(', ')}
              </If>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal