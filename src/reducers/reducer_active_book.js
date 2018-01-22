// state argument is not application state. It is only the state this reducer is responsible for

// when the app starts up, no book will initially be selected, therefore you need to initialise state to null, so the returned value doesnt cause redux to throw an error
export default (state = null, action) => {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  // base case: if no action is required, return state, unchanged
  return state;
}
