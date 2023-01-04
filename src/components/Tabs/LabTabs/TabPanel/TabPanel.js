import React from "react";

const TabPanel = (props) => {
  return (
    <div style={{ display: props.newProp?.display }}>
      {props.children}
    </div>
  );
};

export default TabPanel;
