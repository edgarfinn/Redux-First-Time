import React, {Component} from 'react';

// react-redux is the glue between react and redux.
import { connect } from 'react-redux';
import { selectedBook } from '../actions/index';
// bindActionCreators distributes actions to reducers
import { bindActionCreators } from 'redux';

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
// This is where react and redux are linked together

function mapStateToProps(state) {
    // Anything returned (usually an object) will show up as props inside of BookList (our container)
    return {
      books: state.books
    };
}

function mapDispatchToProps() {
  // whenever selectBook is called, the result should be passed to all reducers.
  return bindActionCreators({selectBook: selectBook }, dispatch)
}
// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// connect takes a function and component and produces a container.
