import React from 'react'

function ListRendering2({d}) {
    console.log(d)
  return (
    <div>
        ListRendering2
        {d.map((value,index)=>{
            return(
                <div>
                    <h1>index :-- {index}</h1>
                    <h2>{value.id}</h2>
                    <h3>{value.name}</h3>
                </div>
            )
        }  )}
    </div>
  )
}

export default ListRendering2