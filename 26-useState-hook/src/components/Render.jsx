import ErrorMessage from "./ErrorMessage";
import FoodItem from "./FoodItem";

function Render({ arr }) {
  return arr.length === 0 ? <ErrorMessage /> : <FoodItem arr={arr} />;
}
export default Render;
