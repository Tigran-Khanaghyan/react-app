import React, { cloneElement } from "react";

const TabContext = ({ children, value }) => {
  let newProp = {
    display: "none",
  };
  const updateWithprops = React.Children.map(children, (child, i) => {
    if (child.props.value !== value) {
      return cloneElement(child, { newProp });
    }
    return cloneElement(child);
  });

  return <div>{updateWithprops}</div>;
};

export default TabContext;
