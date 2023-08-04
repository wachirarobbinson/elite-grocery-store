import React, { useState } from 'react';

const SearchBar = ({ items, setFilteredItems }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    const filtered = items.filter(item =>
      item.itemname.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mb-3">
      <div className="search-container mt-1">
        <input
          type="text"
          id="searchInput"
          placeholder="Search products"
          className="p-2 mr-2 w-48 sm:w-64 rounded-md border"
          value={searchValue}
          onChange={handleChange}
        />
        <button
          id="searchButton"
          className="p-2 px-4 bg-green-600 text-white border-none cursor-pointer rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
