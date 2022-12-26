import React from "react";
import "./DropdownList.css";

const DropdownList = ({ data, setValue }) => {
  const handleClick = (event, elem) => {
    event.preventDefault();
    setValue(elem.title);
  };
  return (
    <ul className="dropdownlist">
      {data.products.map((elem) => {
        return (
          <span key={elem.title} onClick={(event) => handleClick(event, elem)}>
            {elem.title}
          </span>
        );
      })}
    </ul>
  );
};

export default DropdownList;
