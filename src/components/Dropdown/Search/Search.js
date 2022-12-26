import React from "react";
import "./Search.css";

const Search = ({
  value,
  setIsComponentVisible,
  isComponentVisible,
  setValue,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValue("");
  };
  const handleChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValue(event.target.value);
  };
  const handleOpenClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsComponentVisible(true);
  };
  return (
    <form onSubmit={handleSubmit} role="search" className="dropdown-form">
      {isComponentVisible ? (
        <>
          {" "}
          <input
            className="dropdown-input"
            onChange={handleChange}
            value={value}
            type="search"
            placeholder="Search..."
            required
          />
          <button className="dropdown-button" type="submit">
            Go
          </button>
        </>
      ) : (
        <button className="select-button" onClick={handleOpenClick}>
          <span>{value ? value : "Search..."}</span>
        </button>
      )}
    </form>
  );
};

export default Search;
