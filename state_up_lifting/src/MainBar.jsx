import React from 'react'
import Classes from './Classes'
import Attendances from './Attendances'

const MainBar = ({c}) => {

  const mainbarStyle = {
    width: "85%",
    backgroundColor: "#ecf0f1",
    padding: "20px"
  }

  if (c == "Classes"){
    return <Classes />
  }else if (c== "Attendances"){
    return <Attendances />
  }

  return (
    <div style={mainbarStyle}>
      <h2>Main Bar</h2>
      <p>Main content goes here</p>
      <h2>{c}</h2>
    </div>
  )
}

export default MainBar