import React, { cloneElement } from "react";
import './TabList.css'

const TabList = ({ children, onChange }) => {
  const updateWithprops = React.Children.map(children, (child, i) => {
    return cloneElement(child, { onChange: (e) => onChange(e, e.target.value) });
  });

  return <div className="tablist">{updateWithprops}</div>;
};

export default TabList;
