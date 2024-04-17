import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Show from "./Components/Show";

function App() {
  const arr = [1, 8, 9, 5, 92, 4, 7, 6, 75, 99, 100, 46, 27];
  const sortedArr = useMemo(() => {
    return [...arr].sort((a, b) => a - b); // Create a new array before sorting
  }, [arr]);

  ///////------use call back implementation------////////////
  const [count, setCount] = useState(0);

  // useCallback is used to memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
    console.log("I am render");
  }, []); // No dependencies, so this function will not change

  return (
    <>
      <p>Count:{count}</p>
      {/* ChildComponent will only re-render if increment changes */}
      <Show arr={sortedArr} increment={increment}></Show>
    </>
  );
}

export default App;
