import React from "react";
import useFetch from "./components/Fetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://v2.jokeapi.dev/joke/Any?"
  );
  if (loading) {
    return <div>Loading.....</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <div>
        <h1>Category:{data.category}</h1>
        <p>type:{data.type}😂</p>
        <p>me:{data.setup}</p>
        <p>friend:{data.delivery}</p>
      </div>
    </>
  );
}

export default App;
