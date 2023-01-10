import "./TabPanel.css";

interface ITabPanel {
  children: React.ReactNode;
  value:string
  newProp?: {
    display: string
  }
}

const TabPanel = (props: ITabPanel) => {
  return (
    <div className="tabpanel" style={{ display: props.newProp?.display }}>
      {props.children}
    </div>
  );
};

export default TabPanel;
