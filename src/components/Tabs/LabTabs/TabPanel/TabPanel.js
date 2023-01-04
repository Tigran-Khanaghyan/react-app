import React from "react";
import './TabPanel.css'

const TabPanel = (props) => {
  return (
    <div className="tabpanel" style={{ display: props.newProp?.display }}>
      {props.children}
    </div>
  );
};

export default TabPanel;
