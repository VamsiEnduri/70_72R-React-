import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function loginHandlerFunc(e) {
    e.preventDefault();
    let allUsers = JSON.parse(localStorage.getItem("r_users"));
    let loggedInUser = allUsers.find((x) => x.e == email && x.p == password);
    console.log(loggedInUser, "loggedinUser");

    if (loggedInUser) {
      window.location.href = "/dashboard";
    } else {
      console.log("no user found");
    }
  }
  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <input
          type="email"
          placeholder="email here "
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password here "
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => loginHandlerFunc(e)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
