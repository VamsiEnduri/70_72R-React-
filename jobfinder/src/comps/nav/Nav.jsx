import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
    let nav=useNavigate()
  const [status, setStatus] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null,
  );
  const removelUser=()=>{
    localStorage.removeItem("loggedInUser")
  }
  return (
    <div className="navbar">
      <h2>jobHunt</h2>

      {status ? (
        <div className="nav-actions">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/profile">
            <span>Profile</span>
          </Link>
          <span onClick={removelUser}>Logout</span>
        </div>
      ) : (
        <div className="nav-actions">
          <Link to="/login">
            <span>Login</span>
          </Link>
          <Link to="/register">
            <span>Register</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
