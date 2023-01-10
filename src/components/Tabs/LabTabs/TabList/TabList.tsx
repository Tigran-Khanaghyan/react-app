import React, { cloneElement } from "react";
import "./TabList.css";

interface ITabList {
  children: JSX.Element[];
  onChange: (
    e: React.ChangeEvent,
    param: string
  ) => void;
}

const TabList = ({ children, onChange }: ITabList) => {
  const updateWithprops = React.Children.map(children, (child, _i) => {
    return cloneElement(child, {
      onChange: (e: React.ChangeEvent) => onChange(e, (e.target as HTMLInputElement).value),
    });
  });

  return <div className="tablist">{updateWithprops}</div>;
};

export default TabList;
