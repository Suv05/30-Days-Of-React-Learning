import { useRef, useState } from "react";
import { FaBeer } from "react-icons/fa";

//Todo header component
function Todo({ onAddClick }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handelOnClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onAddClick(todoName, dueDate);
  };
  return (
    <>
      <div className="row kg-row">
        <div className="col col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter your task"
          />
        </div>
        <div className="col col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col col-2">
          <button
            type="button"
            className="btn-primary btn"
            onClick={handelOnClicked}
          >
            <FaBeer />
          </button>
        </div>
      </div>
    </>
  );
}
export default Todo;
