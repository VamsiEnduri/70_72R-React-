import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let nav = useNavigate();
  useEffect(() => {
    let l = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log(l)
    if (l == null) {
      nav("/login");
    } else {
      console.log("hello");
    }
  }, []);

  return <div>{children}</div>;
};

export default ProtectedRoute;
