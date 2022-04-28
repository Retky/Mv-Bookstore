import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <section>
    <Router>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </Router>
  </section>
);

export default App;
