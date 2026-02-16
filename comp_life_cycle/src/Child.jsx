// import React from 'react'
import { useEffect, useState } from "react";
const Child = () => {
  const [count,setCount]=useState(0)
  const [bgColor,setBgColor]=useState("")
  useEffect(() => {
    console.log(
      "child comp is created/mounted to dom and rendered successfully ",
    );
    return ()=>{
        console.log("comp child unmounted")
    }
  }, []);
  useEffect(() => {
    console.log("comp updation is happening with count state");
  }, [count]);

  useEffect(()=>{
    console.log("comp updation is happening with bgcolor state");
  },[bgColor])

  function updating(){
    setBgColor("red")
    setCount(count+1)
  }
  return (
    <div style={{backgroundColor:bgColor}}>
      Child
      <h2>hello child comp</h2>
      <p>p tag i child</p>
      <h1>{count}</h1>
      <button onClick={updating}>+</button>
    </div>
  );
};

export default Child;
