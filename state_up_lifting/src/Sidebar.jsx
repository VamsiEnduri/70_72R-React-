import React from 'react'

const Sidebar = ({s}) => {
    const m_items=["Classes","Attendances","Projects","interviewKit"]

  const sidebarStyle = {
    width: "15%",
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "20px"
  }

  return (
    <div style={sidebarStyle}>
      <h2>Sidebar</h2>
      {m_items.map((x)=>{
        return (
            <>
            <p style={{padding:"10px 5px",fontSize:"20px",backgroundColor:"lightcoral",borderRadius:"3px"}} onClick={()=>s(x)}>{x}</p>
            </>
        )
      })}
    </div>
  )
}

export default Sidebar