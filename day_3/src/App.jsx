// import Child from "./Child"
// function App() {
//   let a=10
//   let loc="HYD"
//   let status=true
//   let details={
//     id:1,
//     name:"vamsi"
//   }
//   let skills=["python","sql",{id:1}]
//   return (
//     <div>
//       <Child data={a} location={loc} s={status} d={details} sk={skills}/>
//     </div>
//   )
// }

// export default App
// // props :-- props are used to carry your data from one comp to another comp

// jsxRules
// 1. must and should single parent elem
// 2.js exp/var should use inside {}
//3. class -> className
//  4. attributes should be camelCase
// 5. styling in jsx can be written as {{}} inline styling

// function App() {
//   let a=100
//   return (
//     <div className="appDiv" style={{fontSize:"20px",color:"yellow",backgroundColor:"green"}}>
//       <h1>hello 70_72_R</h1>
//       <p>{a}</p>
//       <button onClick={a()}></button>
//     </div>
//   );
// }

// export default App;

// conditional rendering  - ternary opeartor
// import DashBoard from "./DashBoard"
// import Login from "./Login"
// function App() {
//   // let statusLogin = !true

//   return (
//     <div>
//       <h1>{statusLogin ? <DashBoard /> : <Login />}</h1>
//     </div>
//   )
// }

// export default App

// -------------- if-else =-if

import DashBoard from "./DashBoard";
//  mut conditional rende + props + reusability of comp (DashBoard )
function App() {
  let statusLogin = Number(prompt("enter a number in (1-5) range")); // 1
  if (statusLogin == 1) {
    return <DashBoard v={statusLogin} />;
  } else if (statusLogin == 2) {
    return <DashBoard v={statusLogin} />;
  } else if (statusLogin == 3) {
    return <DashBoard v={statusLogin} />;
  } else if (statusLogin == 4) {
    return <DashBoard v={statusLogin} />;
  } else if (statusLogin == 5) {
    return <DashBoard v={statusLogin} />;
  } else {
    return "sorry";
  }
}

export default App;
