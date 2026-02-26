import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
    let nav=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  function submitHandlerFunc(e){
    e.preventDefault()
    let allUsers=JSON.parse(localStorage.getItem("users"))
    let loggedInUser=allUsers.find((x)=>(x.e == email && x.p == password) && x.r == role)
    console.log(loggedInUser,"loggedinuser")
    localStorage.setItem("loggedInUser",JSON.stringify(loggedInUser))
    if(loggedInUser.r == "Recruiter"){
        nav("/RecruiterDashboard")
    }else{
        nav("/JobSeekerDashboard")
    }
  }
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={(e)=>submitHandlerFunc(e)}>
         
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

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
