import React, { useState } from "react";
import Tab from "./Tab/Tab";
import TabContext from "./TabContext/TabContext";
import TabList from "./TabList/TabList";
import TabPanel from "./TabPanel/TabPanel";

const LabTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange}>
        <Tab label="hello" value="1" />
        <Tab label="hello" value="2" />
        <Tab label="hello" value="3" />
      </TabList>
      <TabPanel value="1">item one</TabPanel>
      <TabPanel value="2">item two</TabPanel>
      <TabPanel value="3">item three</TabPanel>
    </TabContext>
  );
};

export default LabTabs;
