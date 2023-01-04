import React from "react";

const Tab = ({ label, value, onChange }) => {
  return (
    <>
      <button id="" type="button" value={value} role="tab" onClick={onChange}>
        {label}
      </button>
    </>
  );
};

export default Tab;
