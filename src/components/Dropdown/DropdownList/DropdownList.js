import React from "react";
import "./DropdownList.css";

const DropdownList = ({ data }) => {
  if (!data) return;
  return (
    <div>
      <form id="autoform">
        <label htmlFor="shop">Shop</label>
        <input
          list="data"
          id="shop"
          name="technic"
          size="50"
          autoComplete="off"
        />
        <datalist id="data">
          {data.products?.map((elem) => {
            return <option value={elem.title} key={elem.title}></option>;
          })}
        </datalist>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default DropdownList;
