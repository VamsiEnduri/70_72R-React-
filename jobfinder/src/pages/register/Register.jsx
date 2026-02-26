import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
    let nav=useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  function submitHandlerFunc(e){
    e.preventDefault()
    // console.log(name,email,password,role)
    let allUsers=JSON.parse(localStorage.getItem("users")) || []
    let new_user={n:name,e:email,p:password,r:role}
    allUsers.push(new_user)
    localStorage.setItem("users",JSON.stringify(allUsers))
    alert("registration done.....")
    setEmail("")
    setName("")
    setPassword("")
    setRole("")
    nav("/login")
  }
  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2>Register</h2>

        <form onSubmit={(e)=>submitHandlerFunc(e)}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <select onChange={(e) => setRole(e.target.value)}>
            <option value="">Choose your role</option>
            <option value="Recruiter">Recruiter</option>
            <option value="JobSeeker">Job Seeker</option>
          </select>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
