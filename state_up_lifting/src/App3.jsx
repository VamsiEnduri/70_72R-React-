import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MainBar from './MainBar'

const App3 = () => {
    const [choose,setChoose]=useState("")

  const layoutStyle = {
    display: "flex",
    width: "100vw",
    height: "100vh"
  }

  return (
    <div style={layoutStyle}>
      {/* Sidebar */}
      <Sidebar s={setChoose}/>

      {/* MainBar */}
      <MainBar c={choose}/>
    </div>
  )
}

export default App3