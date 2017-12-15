import React, {Component} from 'react'
import {Dialog, FlatButton} from 'material-ui'
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
          <img src={this.props.book.imageLinks.thumbnail} alt="Book cover" />
        </div>
      </Dialog>
    )
  }
}

export default Modal