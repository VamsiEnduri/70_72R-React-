
import { useContext } from 'react'
import {Cnxt} from "./ContextComponent"
const A = () => {
  const {bgColor}=useContext(Cnxt)
  return (
    <div style={{backgroundColor:bgColor}}>A</div>
  )
}

export default A