import MenuHeader from "./components/MenuHeader";
import FoodItem from "./components/FoodItem";

function App() {
  let Fooditems = [
    "Cheeseburger🍔",
    "Cheese sandwich🥪",
    "Chicken burgers🍗",
    "Spicy chicken🍟",
    "Hot dog🌭",
  ];
  return (
    <>
      <div className="menuContainer">
        <MenuHeader></MenuHeader>
        <FoodItem arr={Fooditems}></FoodItem>
      </div>
    </>
  );
}

export default App;
