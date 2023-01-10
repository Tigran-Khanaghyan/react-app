import { useState } from "react";
import Box from "./Box/Box";
import Tab from "./Tab/Tab";
import TabContext from "./TabContext/TabContext";
import TabList from "./TabList/TabList";
import TabPanel from "./TabPanel/TabPanel";

const LabTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (_event: React.ChangeEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange}>
            <Tab label="Item one" value="1" />
            <Tab label="Item two" value="2" />
            <Tab label="Item three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">item one</TabPanel>
        <TabPanel value="2">item two</TabPanel>
        <TabPanel value="3">item three</TabPanel>
      </TabContext>
    </Box>
  );
};

export default LabTabs;
