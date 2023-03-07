import { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashbord/Dashboard";
import PaginationList from "./components/PaginationList/PaginationList";
import Dropdown from "./components/Dropdown/Dropdown";
import ModalWindow from "./components/Modal";
import Tabs from "./components/Tabs";
import RowSelectionTable from "table/tanstack/RowSelection";
import  PrivateContent  from "components/PrivateContent/PrivateContent";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/pagination",
    element: <PaginationList />,
  },
  {
    path: "/dropdown",
    element: <Dropdown />,
  },
  {
    path: "/modal",
    element: <ModalWindow />,
  },
  {
    path: "/tabs",
    element: <Tabs />,
  },
  {
    path: "/table",
    element: <RowSelectionTable/>
  },
  {
    path: "/hoc",
    element: <PrivateContent isAuth={true}/>
  }
]);

const App = () =>  {
  return <RouterProvider router={router} />;
  
}

export default App;
