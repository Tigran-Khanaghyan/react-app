import  { useState } from "react";
import Tab from "./Tab/Tab";
import { tabs } from "../../data";
import "./index.css";
import LabTabs from "./LabTabs";

const Tabs = ({ data = tabs }) => {
  const [tabName, setTabName] = useState('');

  const handleTabClick = (_event: React.MouseEvent<HTMLDivElement>, tabName: string) => {
    setTabName(tabName);
  };

  return (
    <div className="container">
      <div className="tabs-container">
        <div className="tabs">
          {data.map((tab) => {
            const buttonClassName = tabName === tab.tab ? "active" : "tab";
            const infoClassName =
              tabName === tab.tab ? "tab-info" : "tab-not-to-show";
            return (
              <Tab
                name={tab.tab}
                children={tab.info}
                onClick={(event: React.MouseEvent<HTMLDivElement>) => handleTabClick(event, tab.tab)}
                key={tab.tab}
                buttonClassName={buttonClassName}
                infoClassName={infoClassName}
              />
            );
          })}
        </div>
      </div>
      <div>
        <LabTabs />
      </div>
    </div>
  );
};

export default Tabs;
