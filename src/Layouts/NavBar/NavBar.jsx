/* eslint-disable no-unused-vars */
import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Toy Cars</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li tabIndex={0}>
        <a>Blog</a>
      </li>
      <li><a>Login</a></li>
      <li><a>My job</a></li>
    </ul>
  </div>
</div>
    );
};

export default NavBar;