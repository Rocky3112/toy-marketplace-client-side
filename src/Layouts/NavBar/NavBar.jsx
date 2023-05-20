/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { AuthCotext } from "../../Provider/AuthProvider";
import logo from "../../assets/images/logo.jpg";

const NavBar = () => {
  const { user, logOut } = useContext(AuthCotext);
  const [showName, setShowName] = useState(false);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar font-semibold text-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/alltoys" className="justify-between">All Toys</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              {
              user && (
                <div className=" flex">
                   <li>
                    <Link to="/mytoy">My Toys</Link>
                  </li>
                  <li>
                    <Link to="/toyform">Add a Toy</Link>
                  </li>
                </div>
              )
            }
              <Link
                className=" flex items-center gap-6"
                onMouseEnter={() => setShowName(true)}
                onMouseLeave={() => setShowName(false)}
              >
                <div className=" w-full relative">
                  {user && (
                    <img
                      className=" w-12 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  )}
                  {showName && user && (
                    <div className="absolute top-0 left-0 bg-white rounded-md py-1 px-2 shadow-md">
                      {user.displayName}
                    </div>
                  )}
                </div>
                {user ? (
                  <div>
                    <Link onClick={handleLogOut} variant="secondary">
                      Logout
                    </Link>
                  </div>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </Link>
            </ul>
          </div>

          <div className=" flex items-center">
            <img className=" h-12 rounded-full" src={logo} alt="" />
            <Link className="btn btn-ghost text-amber-500 normal-case text-3xl">
              Toy Cars
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/alltoys">All Toys</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {
              user && (
                <div className=" flex">
                   <li>
                    <Link to="/mytoy">My Toys</Link>
                  </li>
                  <li>
                    <Link to="/toyform">Add a Toy</Link>
                  </li>
                </div>
              )
            }
            <Link
              className=" flex items-center gap-6"
              onMouseEnter={() => setShowName(true)}
              onMouseLeave={() => setShowName(false)}
            >
              
              <div className=" w-full relative">
                {user && (
                  <img
                    className=" w-12 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />

                )}
                {showName && user && (
                  <div className="absolute top-0 left-0 bg-white rounded-md py-1 px-2 shadow-md">
                    {user.displayName}
                  </div>
                )}
              </div>
              {user ? (
                <div className="">
                 
                  <Link onClick={handleLogOut} variant="secondary">
                    Logout
                  </Link>
                  
                </div>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn btn-warning">Get started</Link>
        </div>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default NavBar;
