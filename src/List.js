import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

const List = (props) => {
  const filterBooks = (books, filterBy) => {
    return books.filter((book) => {
      return book.shelf === filterBy
    })
  }

  const CATEGORIES = [
    { filter: 'currentlyReading', text: 'Currently Reading' },
    { filter: 'wantToRead', text: 'Want to Read' },
    { filter: 'read', text: 'Read' }
  ]
  const shelfList = CATEGORIES.map((category) => {
    return (
      <Shelf
        key={category.filter}
        title={category.text}
        books={filterBooks(props.books, category.filter)}
        onShelfUpdate={props.onShelfUpdate} />
    )
  })

  return(
      <div className="list-books">
  <div className="list-books-title">
    <h1>MyReads</h1>
  </div>
  <div className="list-books-content">
    <div>
      {shelfList}
    </div>
  </div>
  <div className="open-search">
    <Link to='/search'>Add a book</Link>
  </div>
</div>
    )
}

export default List