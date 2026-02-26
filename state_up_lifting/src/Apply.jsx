import React from 'react'

const Apply = ({s}) => {
  return (
    <div>Apply
        <button onClick={()=>s(prev=>prev+1)}>applyJob</button>
    </div>
  )
}

export default Apply