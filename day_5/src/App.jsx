// // import React from 'react'
// // import data from './data'
// // import "./App.css"

// // function App() {
// //   return (
// //     <div className="app">
// //       {data.products.map((v, i) => {
// //         return (
// //           <div className="card" key={i}>
// //             <h6 className="title">
// //               {v.title} 
// //             </h6>

// //             <img src={v.thumbnail}  className="product-img" />

// //             <span className="price">Rs :-- {v.price}</span>
// //           </div>
// //         )
// //       })}
// //     </div>
// //   )
// // }

// // export default App



// // import data from './data'
// // function App() {
// //   console.log(data.recipes,"data")
// //   // console.log("vvv")
// //   return (
// //     <div>
// //       {data.recipes.map( (v,i)=>{
// //         return (
// //           <div>
// //             <h1 style={{fontSize:"20px"}}>{v.name} - {i}</h1>
// //             <img src={v.image} alt="" width={150} />
// //           </div>
// //         )
// //       } )}
// //     </div>
// //   )
// // }

// // export default App



// import data from './data'

// function App() {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         gap: '20px',
//         padding: '20px',
//         backgroundColor: '#f4f4f4'
//       }}
//     >
//       {data.recipes.map((v, i) => {
//         return (
//           <div
//             key={i}
//             style={{
//               width: '220px',
//               backgroundColor: '#fff',
//               padding: '15px',
//               borderRadius: '10px',
//               boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//               textAlign: 'center'
//             }}
//           >
//             <h1
//               style={{
//                 fontSize: '18px',
//                 marginBottom: '10px',
//                 color: '#333'
//               }}
//             >
//               {v.name}
              
//             </h1>

//             <img
//               src={v.image}
//               alt={v.name}
//               style={{
//                 width: '150px',
//                 height: '150px',
//                 objectFit: 'cover',
//                 borderRadius: '8px'
//               }}
//             />
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default App




// 117:-- inline styling
// 118-119 :-- internal styling :-- js vavrible :-- js object
// 120 :-- external styling
import "./App.css"

function App() {
  const h3Styling={
  backgroundColor:"red",
  padding:"5px 20px",
  color:"white",
  fontSize:"40px"
}
  return (
    <div>
      <h1 style={{backgroundColor:"yellow",padding:"20px"}}>this is 70-72r react</h1>
      <h3 style={h3Styling}>10000Coders</h3>
      <h5>KPHB HYD 570002</h5>
      <p id="trainer_name">VamsiTrainer@Sr</p>
    </div>
  )
}

export default App