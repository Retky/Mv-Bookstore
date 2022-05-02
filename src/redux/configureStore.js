import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(reducer);

export default store;
