// import React from "react";

const Child1 = ({ s, si }) => {
  const updateStateValue = () => {
    s((prev) => prev + 1);
  };
  return (
    <div style={{ backgroundColor: "yellow", padding: "4rem" }}>
      Child1 <button onClick={updateStateValue}>updateState</button>
      <input
        type="text"
        placeholder="entre font size here"
        onChange={(e) => si(e.target.value)}
      />
    </div>
  );
};

export default Child1;
