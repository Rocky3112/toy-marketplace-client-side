/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const NavBar = () => {
  return (
    <div>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link>Item 1</Link></li>
        <li tabIndex={0}>
          <Link className="justify-between">
          All Toys
          </Link>
        </li>
        <li><Link>My Toys</Link></li>
        <li><Link to ="/login">Login</Link></li>
        <li><Link>Blog</Link></li>
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link>Home</Link></li>
      <li tabIndex={0}>
        <Link>All Toys
        </Link>
      </li>
      <li><Link>My Toys</Link></li>
      <li><Link to ="/login">Login</Link></li>
      <li><Link>Blog</Link></li>

    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn">Get started</Link>
  </div>
</div>
    <Outlet></Outlet>
    <Footer></Footer>
</div>
  );
};

export default NavBar;
