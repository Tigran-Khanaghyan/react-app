import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handlePaginationRoute = () => {
    navigate("/pagination");
  };

  const handleDropdownRoute = () => {
    navigate("/dropdown");
  };

  const handleModalRoute = () => {
    navigate("/modal");
  };
  const handleTabsRoute = () => {
    navigate("/tabs");
  };

  return (
    <>
      <div className="dashboard">
        <button onClick={handlePaginationRoute} className={"dashboard-button"}>
          Pagination App
        </button>
        <button onClick={handleDropdownRoute} className={"dashboard-button"}>
          Dropdown App
        </button>
        <button onClick={handleModalRoute} className={"dashboard-button"}>
          Modal App
        </button>
        <button onClick={handleTabsRoute} className={"dashboard-button"}>
          Tabs App
        </button>
      </div>
      {/* <Route path="/pagination" element={<PaginationList />} /> */}
    </>
  );
};

export default Dashboard;
