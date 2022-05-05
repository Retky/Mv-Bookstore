import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <div className="headBar">
      <h1>Bookstore CMS</h1>
      <ul className="navBar">
        <Link to="/">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </ul>
      <div className="logIn">LogIn</div>
    </div>
  </header>
);

export default Navigation;
