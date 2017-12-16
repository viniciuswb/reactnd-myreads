import React from 'react'

import If from "../../hoc/If"

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

  let image = book.imageLinks ? book.imageLinks.thumbnail : ''
  let authors = book.authors ? book.authors.join(', ') : []
  let categories = book.categories ? book.categories.join(', ') : []
  let title = book.title ? book.title : ''
  let subtitle = book.subtitle ? book.subtitle : ''
  let averageRating = book.averageRating ? book.averageRating : 0
  let ratingsCount = book.ratingsCount ? book.ratingsCount : 0
  let publisher = book.publisher ? book.publisher : null
  let publishedDate = book.publishedDate ? book.publishedDate : null
  let pageCount = book.pageCount ? book.pageCount : null

  return (
    <Dialog
      className="book-details"
      actions={actions}
      modal={true}
      open={modalOpen}
      autoScrollBodyContent={true}
    >
      <div>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <div className="book-details-grid">
          <div className="book-details-grid-item">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              margin: '0 auto',
              position: 'relative',
              backgroundImage: `url(${image})`
            }}/>
            <div className="book-ratings">
              <ReactStars
                count={5}
                value={averageRating}
                size={18}
                edit={false}
                color2={'#ffd700'}
                className="book-ratings-stars"
              />
              <p className="book-ratings-count">({ratingsCount})</p>
            </div>
          </div>
          <div className="book-details-grid-item">
            <div className="book-detaill-item">
              <If test={authors.length === 1}>
                <span>Author:</span> <br/> {authors}
              </If>
              <If test={authors.length > 1}>
                <span>Authors:</span> <br/> {authors}
              </If>
            </div>
            <div className="book-detaill-item">
              <If test={publisher}>
                <span>Publisher:</span> <br/> {publisher}
              </If>
            </div>
            <div className="book-detaill-item">
              <If test={publishedDate}>
                <span>Published Date:</span> <br/> {publishedDate}
              </If>
            </div>
            <div className="book-detaill-item">
              <If test={pageCount}>
                <span>Pages:</span> <br/> {pageCount}
              </If>
            </div>
            <div className="book-detaill-item">
              <If test={categories.length === 1}>
                <span>Category:</span> <br/> {categories}
              </If>
              <If test={categories.length > 1}>
                <span>Categories:</span> <br/> {categories}
              </If>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal