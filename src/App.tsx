// import { createBrowserRouter } from "react-router-dom";
// import Dashboard from "./components/Dashbord/Dashboard";
// import PaginationList from "./components/PaginationList/PaginationList";
// import Dropdown from "./components/Dropdown/Dropdown";
// import ModalWindow from "./components/Modal";
// import Tabs from "./components/Tabs";
import { ReactElement } from "react";
import RowSelectionTable from "table/tanstack/RowSelection";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Dashboard />,
//   },
//   {
//     path: "/pagination",
//     element: <PaginationList />,
//   },
//   {
//     path: "/dropdown",
//     element: <Dropdown />,
//   },
//   {
//     path: "/modal",
//     element: <ModalWindow />,
//   },
//   {
//     path: "/tabs",
//     element: <Tabs />,
//   },
// ]);

const App: React.FC = (): ReactElement =>  {
  // return <RouterProvider router={router} />;
  return <RowSelectionTable/>
}

export default App;
