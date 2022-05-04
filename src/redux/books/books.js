import { v4 as uuidv4 } from 'uuid';

const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GGI7t3uPhMwUj8R3YHDl/books';
const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';
const initialState = [
  { id: '001', title: 'Luna', author: 'Rony' },
  { id: '002', title: 'One Stept Ahead', author: 'David Sally' },
];

const apiAddBook = async (id, title, author) => {
  const add = await fetch(api, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category: 'unsorted',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  (await add.text());
};

const apiRemoveBook = async (id) => {
  const remove = await fetch(`${api}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  (await remove.text());
};

export const addBook = (title, author) => (async (dispatch) => {
  const id = uuidv4();
  await apiAddBook(id, title, author);
  dispatch({
    type: ADDBOOK,
    book: { id, title, author },
  });
});

export const removeBook = (id) => (async (dispatch) => {
  await apiRemoveBook(id);
  dispatch({
    type: REMOVEBOOK,
    id,
  });
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
