import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
const App = () => {
  const [count,setCount]=useState(0)
  const [iValue,setIValue]=useState("")
  return (
    <div style={{backgroundColor:"#f6cbcb",padding:"40px"}}>
      <Child1 s={setCount} si={setIValue}></Child1>
      <Child2 c={count} i={iValue}/>
    </div>
  )
}

export default App