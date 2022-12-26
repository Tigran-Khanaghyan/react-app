import React from "react";

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

  return (
    <>
      <div className="dashboard">
        <button onClick={handlePaginationRoute} className={"dashboard-button"}>
          Pagination App
        </button>
        <button onClick={handleDropdownRoute} className={"dashboard-button"}>
          Dropdown App
        </button>
      </div>
      {/* <Route path="/pagination" element={<PaginationList />} /> */}
    </>
  );
};

export default Dashboard;
