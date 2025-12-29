import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About.jsx/About";
import Login from "../Pages/SignPage/Login";
import Register from "../Pages/SignPage/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Layouts/Dashboard";
import DoctorRegistrationForm from "../Pages/Doctors/DoctorRegistrationForm";
import DoctorsList from "../Pages/Doctors/DoctorsList";
import PendingDoctors from "../Pages/Doctors/PendingDoctors";
import DoctorDetails from "../Pages/Doctors/DoctorDetails";
import MyAppointments from "../Pages/User/MyAppointments";
import Medicines from "../Pages/Medicine/Medicines";
import AddMedicine from "../Pages/Medicine/AddMedicine";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      { index: true, Component: Home },
      { path: '/about', Component: About },
      { path: '/login', Component: Login },
      { path: '/register', Component: Register },
      { path: '/medicine', Component: Medicines },
      {
        path: '/be-a-doctor',
        element: (
          <PrivateRouter>
            <DoctorRegistrationForm></DoctorRegistrationForm>
          </PrivateRouter>
        ),
      },
      { path: '/doctors', Component: DoctorsList },
      {
        path: '/doctor-details/:id',
        element: (
          <PrivateRouter>
            <DoctorDetails></DoctorDetails>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      {
        path: '/dashboard/admin/pending-doctors',
        element: <PendingDoctors />,
      },
      {
        path: '/dashboard/admin/addmedicine',
        element: <AddMedicine />,
      },
      {
        path: '/dashboard/my-appointments', element:<MyAppointments></MyAppointments>
      },

    ],
  },
]);
