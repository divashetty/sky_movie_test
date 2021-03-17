import React, { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  });

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    if(searchValue){
    onSearch(searchValue);
    setSearchValue("");
  }
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        ref={searchRef}
        placeholder="Search here"
      />
      <button onClick={searchHandler} type="submit">SEARCH</button>
    </form>
  );
};

Search.propTypes = {
  onSearch:PropTypes.func
};
export default Search;
