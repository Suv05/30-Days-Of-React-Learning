import React from "react";
import { useDispatch } from "react-redux";

function Controls({}) {
  //use to dispatch the action to the reducer i mean index.js
  const dispatch = useDispatch();

  //alwyas takes a object to give dispatch
  const handelIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handelDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary  gap-3"
        fdprocessedid="nbygdm9"
        onClick={handelIncrement}
      >
        <i>Increment</i>
      </button>
      <button
        type="button"
        className="btn btn-outline-warning  gap-3"
        fdprocessedid="nbygdm9"
        onClick={handelDecrement}
      >
        <i>Decrement</i>
      </button>
    </>
  );
}

export default Controls;
