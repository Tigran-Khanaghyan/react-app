import React, { useEffect, useState } from "react";
import Search from "./Search/Search";
import useComponentVisible from "../../hooks/useComponentVisible";
import DropdownItem from "./DropdownItem/DropdownItem";
import Delete from "../../asserts/Icons/Delete";
import "./Dropdown.css";
import Button from "../../shared/Button";

const Dropdown = ({ showSearch = true }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [choosedElement, setChoosedElement] = useState("");

  const getData = () => {
    return fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const handleOpenClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsComponentVisible(!isComponentVisible);
    setValue("");
  };

  const handleDelete = () => {
    setChoosedElement("");
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, isComponentVisible]);

  return (
    <div className="container" ref={ref}>
      <div className="select-container">
        {isComponentVisible && showSearch ? (
          <Search value={value} setValue={setValue} />
        ) : (
          <Button className="select-button" onClick={handleOpenClick}>
            <span>{choosedElement ? choosedElement : "Select an element"}</span>
          </Button>
        )}
        {choosedElement && (
          <Button className={"delete-button"} onClick={handleDelete}>
            <Delete width={25} height={25} />
          </Button>
        )}
      </div>

      {isComponentVisible && (
        <div className="dropdownlist">
          {data.products.map((elem) => {
            return (
              <DropdownItem
                key={elem.title}
                elem={elem}
                setIsComponentVisible={setIsComponentVisible}
                setChoosedElement={setChoosedElement}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
