const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';
const initialState = [];

export const addBook = (title, author) => ({
  type: ADDBOOK,
  book: { title, author },
});

export const removeBook = (id) => ({
  type: REMOVEBOOK,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.book];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
