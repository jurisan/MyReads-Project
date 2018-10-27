import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import List from './List'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books
        })
      })
  }

  handleShelfUpdate = (book, shelf) => {
    const index = this.state.books.indexOf(book)
    const updatedBooks = [...this.state.books]

    if (shelf === 'none') {
      updatedBooks.splice(index, 1) // remove book
    } else if (book.shelf === 'none') {
      const updatedBook = { ...book, shelf }
      updatedBooks.push(updatedBook)
    } else {
      const updatedBook = { ...book, shelf } //update shelf location
      updatedBooks[index] = updatedBook // overwrite existing book
    }

    BooksAPI.update(book, shelf)
      .then(() => {
        this.setState({
          books: updatedBooks
        })
      })
  }

  render() {
    return (
      <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
        <div className='app'>
          <Route exact path='/' render={() => (
            <List books={this.state.books} onShelfUpdate={this.handleShelfUpdate} />
          )} />
          <Route path='/search' render={() => (
            <Search books={this.state.books} onShelfUpdate={this.handleShelfUpdate} />
          )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp