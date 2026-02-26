import React from 'react'
import {createContext} from "react"

export const cntxt=createContext()
const ContextComp = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default ContextComp