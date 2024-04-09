import { useState } from "react";
import "./App.css";
import Show from "./Components/Show";

function App() {
  const [count, setCount] = useState(0);
  const arr = [1, 8, 9, 5, 6, 4, 7, 6, 75, 99, 100, 46, 27];

  return (
    <>
      <Show arr={arr}></Show>
    </>
  );
}

export default App;
