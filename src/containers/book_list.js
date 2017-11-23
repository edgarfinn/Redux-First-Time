import React, {Component} from 'react';
import { connect } from 'react-redux'

export default class Booklist extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// take our applications state as an arhument
function mapStateToProps(state) {
    
}
