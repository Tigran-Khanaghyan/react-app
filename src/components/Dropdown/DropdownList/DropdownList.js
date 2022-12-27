import React from "react";
import "./DropdownList.css";

const DropdownList = ({ data, setValue }) => {
  const handleClick = (event, elem) => {
    event.preventDefault();
    event.stopPropagation();
    setValue(elem.title);
  };
  if (data.products.length <= 1) {
    return;
  }
  return (
    <div className="dropdownlist">
      {data.products.map((elem) => {
        return (
          <div className="dropdown-element" key={elem.title} onClick={(event) => handleClick(event, elem)}>
            {elem.title}
          </div>
        );
      })}
    </div>
  );
};

export default DropdownList;
