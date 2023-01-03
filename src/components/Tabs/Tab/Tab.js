import React from "react";
import Content from "../Content/Content";
import Header from "../Header/Header";
import "./Tab.css";

const Tab = ({ name, onClick, buttonClassName, infoClassName, children }) => {
  return (
    <div>
      <Header name={name} onClick={onClick} buttonClassName={buttonClassName} />
      <Content infoClassName={infoClassName} children={children} />
    </div>
  );
};

export default Tab;
