import Todo from "./components/Todo";
//import TaskRender from "./components/TaskRender";
import TaskAssign from "./components/TaskAssign";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  // const TodoItems = [
  //   {
  //     task: "cricket",
  //     dueDate: "04/12/2023",
  //   },
  //   {
  //     task: "school",
  //     dueDate: "07/08/2006",
  //   },
  //   {
  //     task: "love",
  //     dueDate: "never",
  //   },
  // ];

  const [addTask,setAddTask]=useState();
  return (
    <center className={styles.todoContainer}>
      <h2 className={styles.kgRow}>To-Do</h2>
      {/* TOdo input task bar */}
      <Todo />
      <TaskAssign arr={TodoItems}></TaskAssign>
    </center>
  );
}

export default App;
