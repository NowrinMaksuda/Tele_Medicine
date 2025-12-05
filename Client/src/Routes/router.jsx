import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About.jsx/About";
import Login from "../Pages/SignPage/Login";
import Register from "../Pages/SignPage/Register";
import PrivateRouter from "./PrivateRouter";
// import UserDashboard from "../Pages/UserDashboard/UserDashboard";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      { index: true, Component: Home },
      { path: '/about', Component: About },
      { path: '/login', Component: Login },
      { path: '/register', Component: Register },
      // {path:'/user-dashboard',element:<PrivateRouter><UserDashboard></UserDashboard></PrivateRouter>}
      
    ]
  },
]);
