import React, { useEffect, useState } from "react";
import Search from "./Search/Search";
import "./Dropdown.css";
import useComponentVisible from "../../hooks/useComponentVisible";

const Dropdown = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const getData = () => {
    return fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const handleClick = (event, elem) => {
    event.preventDefault();
    event.stopPropagation();
    setValue(elem.title);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const className = data.products?.length ? "dropdownlist" : "dropdownlist-none";

  return (
    <div className="container" ref={ref}>
      <Search
        value={value}
        setValue={setValue}
        setIsComponentVisible={setIsComponentVisible}
        isComponentVisible={isComponentVisible}
      />
      {isComponentVisible && (
        <div className={className}>
          {data.products?.map((elem) => {
            return (
              <div
                key={elem.title}
                onClick={(event) => handleClick(event, elem)}
              >
                {elem.title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
