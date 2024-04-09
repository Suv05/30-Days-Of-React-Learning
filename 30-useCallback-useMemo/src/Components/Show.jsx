import React from "react";

function Show({ arr }) {
  return (
    <>
      <ul>
        {arr.map((x) => {
          <h2>
            <li className="myli">x</li>
          </h2>;
        })}
      </ul>
    </>
  );
}

export default Show;
