import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

import Header from './Header';
import ItemList from './ItemList';
import SearchBar from './SearchBar';
import Products from './Products';

function App() {
  return (
    <Router> {/* Wrap your components inside Router */}
      <Header />
      <SearchBar />
      <Products />
      <ItemList />
    </Router>
  );
}

export default App;
