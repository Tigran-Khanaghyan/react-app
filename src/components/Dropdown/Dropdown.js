import React, { useEffect, useState } from "react";
import Search from "./Search/Search";
import useComponentVisible from "../../hooks/useComponentVisible";
import "./Dropdown.css";
import DropdownItem from "./DropdownItem/DropdownItem";

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

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="container" ref={ref}>
      <Search
        value={value}
        setValue={setValue}
        setIsComponentVisible={setIsComponentVisible}
        isComponentVisible={isComponentVisible}
      />
      {isComponentVisible && data.products?.length > 1 && (
        <div className="dropdownlist">
          {data.products.map((elem) => {
            return (
              <DropdownItem elem={elem} setValue={setValue} key={elem.title} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
