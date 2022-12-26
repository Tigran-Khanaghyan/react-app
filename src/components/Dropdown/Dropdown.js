import React, { useEffect, useState } from "react";
import Search from "./Search/Search";
import DropdownList from "./DropdownList/DropdownList";
import "./Dropdown.css";

const Dropdown = () => {
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
    <div className="container">
      <Search value={value} setValue={setValue} />
      {value && <DropdownList data={data} setValue={setValue} />}
    </div>
  );
};

export default Dropdown;
