// an action creator is a function which returns an applications
// an action is an object which provides details of the action we want to take. (Such as selecting a book, or in other words, setting the selected book)

export function selectBook(book) {
  console.log('A book has been selected: ', book.title);
}
