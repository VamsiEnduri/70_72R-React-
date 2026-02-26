import React, { useState } from 'react'
import MyApps from './MyApps'
import Profile from './Profile'
import Apply from './Apply'

const JobSeekerDash = () => {
    const [appls,setAppls]=useState(0)
  return (
    <div>
        <Apply s={setAppls}/>
        <MyApps a={appls}/>
        <Profile a={appls}/>
    </div>
  )
}

export default JobSeekerDash