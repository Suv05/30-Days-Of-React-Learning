import Todo from "./components/Todo";
import TaskAssign from "./components/TaskAssign";
import ErrorMessage from "./components/ErrorMessage";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [TodoItems, setTodoItems] = useState([]);

  const handelNewTodoItems = (itemName, itemDueDate) => {
    // console.log(`new TodoItems are ${itemName} and ${itemDueDate}`);
    setTodoItems((currValue) => [
      ...currValue,
      { task: itemName, dueDate: itemDueDate },
    ]);
  };

  const handelDeleteBtn = (todoItemName) => {
    let newTodoItems = TodoItems.filter((x) => {
      x.task !== todoItemName;
    });

    setTodoItems(newTodoItems);
  };

  return (
    <center className={styles.todoContainer}>
      <h2 className={styles.kgRow}>To-Do</h2>
      {/* TOdo input task bar */}
      <Todo onAddClick={handelNewTodoItems} />
      <TaskAssign arr={TodoItems} onDeleteClick={handelDeleteBtn}></TaskAssign>
      <ErrorMessage arr={TodoItems} />
    </center>
  );
}

export default App;
