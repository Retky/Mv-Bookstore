import React from 'react';

const BookElement = () => (
  <li className="bookElement">
    <div>
      <h3>Book Title</h3>
      <small>Author Name</small>
      <ul className="bookEdit">
        <li>Comments</li>
        <li>Remove</li>
        <li>Edit</li>
      </ul>
    </div>
    <div className="progress">
      <div>O</div>
      <div>
        <p>64%</p>
        <small>Completed</small>
      </div>
    </div>
    <div className="bookInfo">
      <small>CURRENT CHAPTER</small>
      <p>Chapter 17</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </li>
);

export default BookElement;
