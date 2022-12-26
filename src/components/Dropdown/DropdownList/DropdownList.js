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
    <ul className="dropdownlist">
      {data.products.map((elem) => {
        return (
          <div key={elem.title} onClick={(event) => handleClick(event, elem)}>
            {elem.title}
          </div>
        );
      })}
    </ul>
  );
};

export default DropdownList;
