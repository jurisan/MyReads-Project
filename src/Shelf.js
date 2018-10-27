import React from 'react'
import Book from './Book'

const Shelf = (props) => {
  const booksList = props.books.length === 0 ?
    <li key='empty'>Empty</li> : props.books.map((book) => {
      return (
        <li key={book.id}>
          <Book book={book} onShelfUpdate={props.onShelfUpdate} />
        </li>
      )
    })

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksList}
        </ol>
      </div>
    </div>
  )
}

export default Shelf
