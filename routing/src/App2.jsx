// // import React from 'react'

// // function App2() {
// //     let a=10
// //     a="vamsi123"
// //     let age=30
// //     let loc ="ap"
// //   return (
// //     <div>
// //        <h4> App2</h4>
// //         <h1>{a}</h1>
// //         <Child data={a} ag={age}/>

// //     </div>
// //   )
// // }

// // export default App2

// // function Child({data,ag}){
// //     console.log("child comp",data,ag)
// //     return (
// //         <div>
// //             child
// //             <h1>{data}</h1>
// //             <h1>{ag}</h1>
// //             <p>hyd 10000Coders</p>
// //             <span></span>
// //         </div>
// //     )
// // }

// // //  render :-- comp lo unde jsx html page lo root id element ki append avvatam
// // //  re-render :- comp anedi again entirely dom ki append avvatam

// // // re-rendering :-- state updation ""

// // // state :-- its a comp storage person :-- it stores comp data

// // // state syntax :--
// // // comp state :-- useState() handle chesta untam

// // // useState :-- he is a react hook

// // // hook :-- inbuilt js function to store comp data

// import React, { useState } from 'react'
// // hook :-- usestate :-- it will help us to maintain comp state (data)
// function App2() {
//     const [v1,v2]=useState()
//     // const [b1,b2]=useState()

//   return (
//     <div>
//         <h2>app comp</h2>
//         <p>{a}</p>
//     </div>
//   )
// }

// export default App2

import React, { useState } from "react";

function App2() {
  const [value, setValue] = useState(0); // value =0 4 :-- 3
  function incre() {
    setValue(value+1)
  }
  function dec() {
    setValue(value-1)
  }
  return (
    <div>
      <h2>
        Lorem ipsum dolor, 
      </h2>
      <p>Lorem, ipsum dolor.</p>
      <button onClick={() => dec()}>-</button>
      <h1>{value}</h1>
      <button onClick={() => incre()}>+</button>
    </div>
  );
}

export default App2;
