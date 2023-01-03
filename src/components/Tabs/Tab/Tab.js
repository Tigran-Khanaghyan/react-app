import React from "react";
import Button from "../../../shared/Button";
import "./Tab.css";

const Tab = ({ name, onClick, buttonClassName, infoClassName, children}) => {
  return (
    <div>
      <Button name={name} onClick={onClick} className={buttonClassName} />
      <div className={infoClassName}>{children}</div>
    </div>
  );
};

export default Tab;
