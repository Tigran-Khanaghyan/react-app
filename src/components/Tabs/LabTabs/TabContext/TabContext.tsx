import React, { cloneElement } from "react";

interface ITabContext {
  children: JSX.Element[];
  value: string;
}

const TabContext = ({ children, value }: ITabContext) => {
  let newProp = {
    display: "none",
  };
  const updateWithprops = React.Children.map(children, (child: React.ReactElement, _i) => {
    if (child.props.value !== value) {
      return cloneElement(child, { newProp });
    }
    return cloneElement(child);
  });

  return <div>{updateWithprops}</div>;
};

export default TabContext;
