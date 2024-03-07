import { useState } from "react";
import styles from "./FoodItem.module.css";

function FoodItem({ arr }) {
  const [clicked, setClicked] = useState(false);

  let handelOnClick = () => {
    setClicked(true);
  };
  return (
    <>
      <ul className={"list-group " + styles.ulItems}>
        {arr.map((x) => (
          <li className={"list-group-item " + styles.myItems} key={x}>
            {x}
            <button
              className={
                "btn btn-outline-warning " +
                styles.kgbtn +
                (clicked ? "  btn-success" : "")
              }
              onClick={handelOnClick}
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
