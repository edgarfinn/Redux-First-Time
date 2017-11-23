import React, {Component} from 'react';

// react-redux is the glue between react and redux.
import { connect } from 'react-redux';
// BOOK LIST IS GOING TO BE OUR CONTAINER THE STATE OF OUR BOOKS LIST

// BookList is our container. Its the comopnent that cares about the state of our list of books
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// Take our applications state as an arhument
// This is where react and redux are lnked together

function mapStateToProps(state) {
    // whatever is returned (usually an object) will show up as props inside of BookList
    return {
      books: state.books
    };
}

export default connect(mapStateToProps)(BookList);
// connect takes a function and component and produces a container.
