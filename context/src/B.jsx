// import React from 'react'
import {  useContext } from 'react'
import { Cnxt } from './ContextComponent'
const B = () => {
  const {count,bgColor2,font}=useContext(Cnxt)
  return (
    <div style={{backgroundColor:bgColor2,fontSize:font}}>{count}</div>
  )
}

export default B