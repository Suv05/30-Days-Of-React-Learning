import MenuHeader from "./components/MenuHeader";
import FoodItem from "./components/FoodItem";
import ErrorMessage from "./components/ErrorMessage";
import Render from "./components/Render";

function App() {
 // let Fooditems = [];
  let Fooditems = [
    "Cheeseburger🍔",
    "Cheese sandwich🥪",
    "Chicken burgers🍗",
   // "Spicy chicken🍟",
   // "Hot dog🌭",
  ];

  let hadelKeyDown=(event)=>{
    if(event.key==="Enter"){
      event.preventDefault(); // Prevent default behavior of Enter key
      console.log(event);
      console.log(event.target.value);
      Fooditems.push(event.target.value);
      event.target.value = ""; // Clear the input field
      console.log(Fooditems); // Logging the updated Fooditems array
    }
  }
  return (
    <>
      <div className="menuContainer">
        <MenuHeader onKeyDown={hadelKeyDown}></MenuHeader>
        <Render arr={Fooditems}></Render>
      </div>
    </>
  );
}

export default App;
