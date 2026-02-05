// // import React from 'react'

// // function App() {
// //   return (
// //     <div>App</div>
// //   )
// // }

// // export default App

// import React from 'react' // 19th version of react
// import {C1} from "./c1"
// import {C2} from "./c2"

// import Virat from './c3'
// // import C3  from './c3'
// // named exporting
// export function App() {
//   return (
//     <div>App
//       {/* {C1} */}
//       <C1 />
//       {/* {C2} */}
//       <C2 />
//       {<C1 />}
//       <Virat />    
//       <Virat />
//       <Dhoni />  
//       {/* <P />  */}
//     </div>
//   )
// }


// import ListRendering from "./ListRendering"
// function App() {
//   let nums=[10,20]
//   let skills=["python","js"]
//   let a=[null,null]
//   let u=[undefined,undefined]
//   return (
//     <div>
//       <ListRendering sk={skills} nu={nums} nl={a} uvl={u}/>
//     </div>
//   )
// }

// export default App


// --  
// import React from 'react'
// import ListRendering2 from './ListRendering2'

// function App() {
//   let data=[{id:1,name:"vamsi"},{id:2,name:"ravi"},{id:3,name:"rakesh"}]
//   return (
//     <div>
//       <ListRendering2 d={data} />
//     </div>
//   )
// }

// export default App



// ---
import data from './data'

function App() {
  return (
    <div style={{display:'flex'}}>
      {data.map((value,index)=>{
        return (
          <div key={index} style={{backgroundColor:"yellow"}}>
            <img src={value.image}/>
            <h2>{value.title}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default App