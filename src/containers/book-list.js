import React, {Component} from 'react';
// connect from react-redux is used together with mapStateToProps
// to bond the state returned from
import { connect } from 'react-redux';

// import your action creator(s)
import { selectBook } from '../actions/index';

// this is what makes actions flow through your different reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => { this.props.selectBook(book) }}
          className="list-group-item">
          {book.title}
        </li>
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

// whatever is returned from this function
// will show as props in BookList
const mapStateToProps = (state) => {
  return {
    // whatever key being referenced here
     // must be defined as as a key in the combineReducers index module
    books: state.books
  };
}
// Anything returned from this function will
// end up as props on the BookList container (e.g. 'this.props.selectBook')
const mapDispatchToProps = (dispatch) => {
  // whenever selectBook is called the result should
  // be passed to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

// Promote BookList from a component to a container (mapStateToProps)
// it also needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
