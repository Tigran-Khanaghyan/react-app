import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashbord/Dashboard";
import PaginationList from "./components/PaginationList/PaginationList";
import Dropdown from "./components/Dropdown/Dropdown";
import ModalWindow from "./components/Modal";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
