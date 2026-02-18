import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="navbar">
      <h2 className="logo">Project_MINI</h2>
      <div className="navLinks">
        <Link to="/products">Products</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Nav;
