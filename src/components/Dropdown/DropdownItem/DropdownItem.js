import React from "react";
import "./DropdownItem.css";

const DropdownItem = ({ elem, setIsComponentVisible, setChoosedElement }) => {
  const handleClick = (elem) => {
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
