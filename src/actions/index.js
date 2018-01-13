export function selectBook(book) {
  // selectBook is an action creator that needs to return an action,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

// actions usually have two values: a type, and a payload

// the type value is essential, to describe the type of action being taken
// the optional payload will then further descibe conditions of the action.
