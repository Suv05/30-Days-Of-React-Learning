import AppName from "./components/AppName";
import Todo from "./components/Todo";
//import TaskRender from "./components/TaskRender";
import TaskAssign from "./components/TaskAssign";
import "./App.css";

function App() {
  const TodoItems = [
    {
      task: "cricket",
      dueDate: "04/12/2023",
    },
    {
      task: "school",
      dueDate: "07/08/2006",
    },
    {
      task: "love",
      dueDate: "never",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      {/* TOdo input task bar */}
      <Todo />
      <TaskAssign arr={TodoItems}></TaskAssign>
    </center>
  );
}

export default App;
