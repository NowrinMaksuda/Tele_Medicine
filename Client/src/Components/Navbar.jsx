import React from 'react';
import { NavLink } from 'react-router';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';

const Navbar = () => {
  const{user,logOut}=useAuth()
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/doctors">Doctors</NavLink>
      </li>
      <li>
        <NavLink to="/medicine">Medicine</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/be-a-doctor">Apply Doctor</NavLink>
          </li>
        </>
      )}
    </>
  );

    const handleLogut = () => {
      logOut().then(() => {
        toast.success('logout');
      });
    };
  return (
    <div className="navbar bg-secondary shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">TeleMed</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <NavLink onClick={handleLogut} className="btn btn-primary text-white">
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login" className="btn btn-primary text-white">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;