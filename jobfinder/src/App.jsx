import React from 'react'
import {Route,Routes} from "react-router-dom"
import Nav from './comps/nav/Nav'
import Home from './pages/home/Home'
import Login from './pages/Login/Login'
import Register from './pages/register/Register'
import RecruiterDashboard from './comps/Dashboards/Recruiter/RecruiterDashboard'
import JobSeekerDashboard from './comps/Dashboards/JobSeeker/JobSeekerDashboard'
import ProtectedRoute from './comps/ProtectedRoute/ProtectedRoute'
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/RecruiterDashboard' element={<ProtectedRoute><RecruiterDashboard /></ProtectedRoute>}/>
        <Route path='/JobSeekerDashboard' element={<ProtectedRoute>
          <JobSeekerDashboard />
        </ProtectedRoute>}/>
      </Routes>
    </div>
  )
}

export default App