import { useState } from "react";
import MenuHeader from "./components/MenuHeader";
import Render from "./components/Render";

function App() {
  const [FoodItems, setFoodItems] = useState([
    "Cheeseburger🍔",
    "Cheese sandwich🥪",
    "Chicken burgers🍗",
    "Spicy chicken🍟",
    "Hot dog🌭",
  ]);

  //for adding items to the menu......
  let hadelKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default behavior of Enter key
      const newItem = event.target.value;
      setFoodItems((prevItem) => [...prevItem, newItem]);
      event.target.value = ""; // Clear the input field
    }
  };
  return (
    <>
      <div className="menuContainer">
        <MenuHeader onKeyDown={hadelKeyDown}></MenuHeader>
        <Render arr={FoodItems}></Render>
      </div>
    </>
  );
}

export default App;
