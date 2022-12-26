import React from "react";
import "./Search.css";

const Search = ({ value, setValue }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} role="search" className="dropdown-form">
      <input
        className="dropdown-input"
        onChange={handleChange}
        value={value}
        type="search"
        placeholder="Search..."
        autoFocus
        required
      />
      <button className="dropdown-button" type="submit">
        Go
      </button>
    </form>
  );
};

export default Search;
