import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   console.log(name, email, password, "entered name");

  function registerHandlerFunc(e) {
    e.preventDefault();
    console.log(name, email, password, "entered name");
    let allUsers=JSON.parse(localStorage.getItem("r_users")) || []
    console.log(allUsers)
    allUsers.push({"n":name,"e":email,"p":password})
    console.log(allUsers)
    localStorage.setItem("r_users",JSON.stringify(allUsers))
    window.location.href="/login"
  }
  return (
    <div>
      <h1>RegisterForm</h1>
      <form>
        <input
          type="text"
          placeholder="enter name here "
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="enter email here "
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter password here "
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => registerHandlerFunc(e)}>Register</button>
      </form>
    </div>
  );
};

export default Register;
