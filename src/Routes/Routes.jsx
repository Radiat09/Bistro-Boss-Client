import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/MyCart/MyCart";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ContactWay from "../Pages/Shared/ContactWay/ContactWay";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddItem from "../Pages/AddItem/AddItem";
import PrivateRoute from "./PrivateRoute";
import ManageItems from "../Pages/ManageItems/ManageItems";
import UpdateItem from "../Pages/UpdateItem/UpdateItem";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourmenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "contactUs",
        element: <ContactWay></ContactWay>,
      },
      {
        path: "allUsers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoutes>
            <AddItem></AddItem>
          </AdminRoutes>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoutes>
            <ManageItems></ManageItems>
          </AdminRoutes>
        ),
      },
      {
        path: "manageItems/:id",
        element: <UpdateItem></UpdateItem>,
      },
    ],
  },
]);
