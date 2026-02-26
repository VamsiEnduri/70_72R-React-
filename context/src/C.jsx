
import {Cnxt} from "./ContextComponent"
import { useContext } from 'react'
const C = () => {
  const {count,bgColor}=useContext(Cnxt) 
  return (
    <div style={{backgroundColor:bgColor}}> 
      <h1>C comp</h1>
      {count}
    </div>
  )
}

export default C