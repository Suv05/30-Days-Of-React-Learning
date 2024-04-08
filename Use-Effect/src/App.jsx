import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  //pro version
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 5000);

    return () => {
      console.log("Interval cleaned up");
      clearTimeout();
    };
  });

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const jasonData = await response.json();
      setData(jasonData);
    } catch (err) {
      console.log("can't fetched");
    }
  };

  return (
    <>
      <div>
        {/* Render data */}
        {data && (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
