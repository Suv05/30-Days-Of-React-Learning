import AppName from "./components/AppName";
import Todo from "./components/Todo";
import TodoItem1 from "./components/TodoItem-1";
import TodoItem2 from "./components/TodoItem-2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      {/* starting of first line */}
      <Todo />
      <div className="item-container">
        {/* second line of code */}
        <TodoItem1></TodoItem1>
        {/* third line of code */}
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
