import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-input" />
      <div className="buttons">
        <button className="search-button">Google Search</button>
        <button className="search-button">I'm Feeling Lucky</button>
      </div>
    </div>
  );
};

export default SearchBar;
