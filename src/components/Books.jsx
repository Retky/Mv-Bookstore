import React from 'react';
import BookElement from './SingleBook';

const Books = () => (
  <div>
    <ul className="bookList">
      <BookElement />
    </ul>
    <form className="addBook">
      <h2>ADD NEW BOOK</h2>
      <input type="text" name="title" placeholder="Book Title" />
      <input type="text" name="author" placeholder="Book Author" />
      <button className="addBtn" type="submit">Add Books</button>
    </form>
  </div>
);

export default Books;
