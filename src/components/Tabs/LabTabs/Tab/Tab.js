import React from "react";
import "./Tab.css";

const Tab = ({ label, value, onChange }) => {
  return (
    <>
      <button
        className="tab-button"
        id=""
        type="button"
        value={value}
        role="tab"
        onClick={onChange}
      >
        {label}
      </button>
    </>
  );
};

export default Tab;
