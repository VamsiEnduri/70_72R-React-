import React from "react";

const Child2 = ({ c, i }) => {
  return (
    <div
      style={{ backgroundColor: "purple", padding: "4rem", fontSize: `${i}px` }}
    >
      Child2 <h2 style={{ color: "white" }}>{c} :-- count state value</h2>
      <h2 style={{ color: "white" }}>{i} :-- input state value</h2>
    </div>
  );
};

export default Child2;
