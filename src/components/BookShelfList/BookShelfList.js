import React, {Component} from 'react'
import BookShelf from './BookShelf/BookShelf'
import './BookShelfList.css'

class BookShelfList extends Component {
  state = {
    shelfs: [
      {
        name: 'Currently Reading'
      },
      {
        name: 'Want to Read'
      },
      {
        name: 'Read'
      }
    ]
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-content">
          {
            this.state.shelfs.map(
              (shelf, index) => (
                <BookShelf
                  key={index}
                  title={shelf.name}
                />
              ))
          }
        </div>
      </div>
    )
  }
}

export default BookShelfList