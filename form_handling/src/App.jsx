import React from 'react'
import Register from './Register'
import Login from './Login'
import Nav from './Nav'
import { Routes ,Route} from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      {/* <Register />
      <Login /> */}
    </div>
  )
}

export default App