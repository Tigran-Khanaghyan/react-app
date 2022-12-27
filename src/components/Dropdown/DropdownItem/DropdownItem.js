import React from "react";
import "./DropdownItem.css";

const DropdownItem = ({ elem, setValue, setIsComponentVisible, setChoosedElement }) => {
  const handleClick = (event, elem) => {
    event.preventDefault();
    event.stopPropagation();
    setIsComponentVisible(false);
    setChoosedElement(elem.title)
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
