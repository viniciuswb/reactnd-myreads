import React, {Component} from 'react'
import {Dialog, FlatButton} from 'material-ui'
import ReactStars from 'react-stars'
import './BookDetails.css'

class Modal extends Component {
  componentDidMount() {
    console.log(this.props.book)
  }

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.props.modalClose}
      />
    ]

    return (
      <Dialog
        className="book-details"
        actions={actions}
        modal={true}
        open={this.props.modalOpen}
        autoScrollBodyContent={true}
      >
        <div>
          <h3>{this.props.book.title}</h3>
          <h4>{this.props.book.subtitle}</h4>
          <img className="book-detail-cover" src={this.props.book.imageLinks.thumbnail} alt="Book cover"/>
          <div className="book-ratings">
            <ReactStars
              count={5}
              value={this.props.book.averageRating}
              size={18}
              edit={false}
              color2={'#ffd700'}
              className="book-ratings-stars"
            />
            <p className="book-ratings-count">({this.props.book.ratingsCount ? this.props.book.ratingsCount : 0})</p>
          </div>
        </div>
      </Dialog>
    )
  }
}

export default Modal