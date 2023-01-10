import React from "react";
import "./Box.css";

interface IBox {
  children: React.ReactNode;
}

const Box = (props: IBox) => {
  return <div className="box">{props.children}</div>;
};

export default Box;
