import React from "react";

function Show({ arr, increment }) {
  return (
    <>
      {/* This button will trigger the increment function */}
      <button onClick={increment}>Increment Count</button>
      <ul>
        {arr.map((x) => (
          <h3 key={x}>
            {" "}
            {/* Added key prop for each list item */}
            <li className="myli">{x}</li> {/* x should not be in quotes */}
          </h3>
        ))}
      </ul>
      <hr />
    </>
  );
}

export default Show;
