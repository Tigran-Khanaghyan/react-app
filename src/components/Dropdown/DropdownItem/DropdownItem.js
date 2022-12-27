import React from "react";
import './DropdownItem.css'

const DropdownItem = ({ elem, setValue }) => {
    
  const handleClick = (event, elem) => {
    event.preventDefault();
    event.stopPropagation();
    setValue(elem.title);
  };

  return (
    <div
      className="dropdown-element"
      onClick={(event) => handleClick(event, elem)}
    >
      {elem.title}
    </div>
  );
};

export default DropdownItem;
