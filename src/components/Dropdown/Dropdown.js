import React, { useEffect, useState } from "react";
import Search from "./Search/Search";
import DropdownList from "./DropdownList/DropdownList";
import useComponentVisible from "../../hooks/useComponentVisible";
import "./Dropdown.css";

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
      {isComponentVisible && <DropdownList data={data} setValue={setValue} />}
    </div>
  );
};

export default Dropdown;
