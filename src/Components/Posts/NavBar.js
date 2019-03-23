import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1 className="store-header">GigaPets</h1>
      <div className="nav-links">
        <NavLink exact to="/gigapets">
          Home
        </NavLink>
        <NavLink to="/gigapets">Posts</NavLink>
        <NavLink to="/PostForm">Add Post</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
