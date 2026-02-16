// // // import React from 'react'

// // import { useState } from "react";
// // import Child from "./Child";
// // function App() {
// //   const [status, setStatus] = useState(true);

// //   return (
// //     <div>
// //       <h1>parent comp</h1>
// //       <button onClick={()=>setStatus(false)}>click</button>
// //       <h3>{status && <Child />}</h3>
// //     </div>
// //   );
// // }

// // export default App;

// // // true == true && false== "false"
// // // false && <Child />

// import React, { useEffect, useState } from 'react'

// function App() {
//   const [count,setCount]=useState(0)
//   useEffect(()=>{
//    console.log("app mounted")
//   },[])

//   useEffect(()=>{
//    console.log("app mounted and updated")
//   },[count])
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>+</button>
//       <button onClick={()=>}>hide</button>
//     </div>
//   )
// }

// export default App

import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function apiCalling() {
      let r = await fetch("https://fakestoreapi.com/products");
      let r1 = await r.json();
      // console.log(r1);
      setData(r1);
    }
    apiCalling();
  }, []);

  console.log(data, "data");

  if (data.length == 0) {
    return <h1>loading data pls ait for a moment</h1>;
  }

  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <h2>{item.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default App;
