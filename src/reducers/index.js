import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// this reducer combiner adds a key 'books' to our applications state. Where the key is 'books' and the value is whatevet gets returned from the BooksReducer reducer module
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
