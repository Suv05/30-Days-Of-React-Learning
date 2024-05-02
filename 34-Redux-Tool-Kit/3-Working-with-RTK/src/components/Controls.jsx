import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { add, decrement, increment, sub } from "../redux";

function Controls({}) {
  //using useref to store the input value
  const inputElement = useRef();
  //use to dispatch the action to the reducer i mean index.js
  const dispatch = useDispatch();

  //alwyas takes a object to give dispatch......
  const handelIncrement = () => {
    dispatch(increment());
  }; //handel to the increment button
  const handelDecrement = () => {
    dispatch(decrement());
  }; //handel to the decrement button

  ///////=============handel the input buttons=================////////////////////
  const handelAdd = () => {
    dispatch(add(Number(inputElement.current.value)));
    inputElement.current.value = "";
  };
  const handelSub = () => {
    dispatch(sub(inputElement.current.value));
    inputElement.current.value = "";
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

      {/* input tag with button addon */}
      <div className="input-group">
        <button
          className="btn btn-outline-info"
          type="button"
          id="button-addon1"
          onClick={handelAdd}
        >
          <i>Addition</i>
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Enter the number"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          ref={inputElement}
        />
        <button
          className="btn btn-outline-danger"
          type="button"
          id="button-addon2"
          onClick={handelSub}
        >
          <i>Subtraction</i>
        </button>
      </div>
    </>
  );
}

export default Controls;
