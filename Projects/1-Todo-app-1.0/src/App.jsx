import Todo from "./components/Todo";
import TaskAssign from "./components/TaskAssign";
import ErrorMessage from "./components/ErrorMessage";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [TodoItems, setTodoItems] = useState([]);

  let handelNewTodoItems = (itemName, itemDueDate) => {
    console.log(`new TodoItems are ${itemName} and ${itemDueDate}`);
    const newTodoItems = [
      ...TodoItems,
      { task: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  return (
    <center className={styles.todoContainer}>
      <h2 className={styles.kgRow}>To-Do</h2>
      {/* TOdo input task bar */}
      <Todo onAddClick={handelNewTodoItems} />
      <TaskAssign arr={TodoItems}></TaskAssign>
      <ErrorMessage arr={TodoItems} />
    </center>
  );
}

export default App;
