import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import DashbaordLayout from "../layouts/DashbaordLayout";
import AddRecipe from "../pages/dashbord/AddRecipe";
import ManageAllRecipe from "../pages/dashbord/ManageAllRecipe";
import DashboardHome from "../pages/dashbord/DashboardHome";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import PrivateRoute from '../routes/PrivateRoute'

 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/blog",
        element: <Blogs/>,
      }
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashbaordLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome/>,
      },
      {
        path: "/manage-recipes",
        element: <ManageAllRecipe/>,
      },
      {
        path: "/add-recipe",
        element: <AddRecipe/>,
      }
    ],
  },
]);
export default router;
