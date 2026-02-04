
// function Child(p) { // nrml parameter :-- recived all props in a object format with key and values 
//     console.log(p)
//   return (
//     <div>Child {p.data} {p.location} {p.s} {p.d.name} {p.sk}</div>
//   )
// }
// // Child(10)
// export default Child

function Child({data,location,d,sk}) { // find this process name
    console.log(data,location,d,sk) 
   return (
    <div>
        <h1>{data} {location} {d.name} {sk}</h1>
    </div>
   )
}
// Child(10)
export default Child