import React from 'react'

class Book extends React.Component {
  state = {
    value: this.props.book.shelf ? this.props.book.shelf : 'none'
  }

  handleChange = (event) => {
    this.props.onShelfUpdate(this.props.book, event.target.value)

    this.setState({value: event.target.value})
  }

  render() {
    //The below book details are not guaranteed, so setting fall backs
    const authors = this.props.book.authors || []
    const thumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''

    const authorsList = authors.map((author) => {
      return <div key={author}>{author}</div>
    })

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              backgroundImage: 'url(' + thumbnail + ')'
            }}>
          </div>
          <div className="book-shelf-changer">
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="disabled" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{authorsList}</div>
      </div>
    )
  }
}

export default Book