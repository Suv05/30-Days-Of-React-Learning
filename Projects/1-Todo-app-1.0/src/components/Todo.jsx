import { useState } from "react";
import { FaBeer } from "react-icons/fa";

//Todo header component
function Todo({ onAddClick }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handelNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handelDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handelOnClicked = () => {
    onAddClick(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <>
      <div className="row kg-row">
        <div className="col col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter your task"
            onChange={handelNameChange}
          />
        </div>
        <div className="col col-4">
          <input type="date" value={dueDate} onChange={handelDateChange} />
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
