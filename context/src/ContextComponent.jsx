import React,{ createContext, useState }  from 'react'

export const Cnxt=createContext() // creating context

console.log(Cnxt,"Cnxt")

const ContextComponent = ({d}) => {
    // console.log(d,"4 contComp")
    const [count,setCount]=useState(0)
    const [bgColor,setBgColor]=useState("yellow")
    const [bgColor2,setBgColor2]=useState("green")
    const [font,setFont]=useState(50)
  return (
    <Cnxt.Provider value={{count,bgColor,font,bgColor2}}>  {/* // providing states r values r data to context */}
        {d}
    </Cnxt.Provider>
  )
}

export default ContextComponent