import React from "react";
import Button from "../../../shared/Button";
import "./Tab.css";

const Tab = ({ name, onClick, buttonClassName, infoClassName, tabInfo }) => {
  return (
    <div>
      <Button name={name} onClick={onClick} className={buttonClassName} />
      <div className={infoClassName}>{tabInfo}</div>
    </div>
  );
};

export default Tab;
