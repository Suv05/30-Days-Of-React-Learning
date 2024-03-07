import { useState } from "react";
import styles from "./FoodItem.module.css";

function FoodItem({ arr }) {
  const [clicked, setClicked] = useState([Array(arr.length).fill(false)]);

  let handelOnClick = (index) => {
    let newClickedButtons = [...clicked];
    newClickedButtons[index] = !newClickedButtons[index];
    setClicked(newClickedButtons);
  };
  return (
    <>
      <ul className={"list-group " + styles.ulItems}>
        {arr.map((x, index) => (
          <li className={"list-group-item " + styles.myItems} key={x}>
            {x}
            <button
              className={
                "btn btn-outline-warning " +
                styles.kgbtn +
                (clicked[index] ? "  btn-success" : "")
              }
              onClick={() => handelOnClick(index)}
            >
              BUY
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default FoodItem;
