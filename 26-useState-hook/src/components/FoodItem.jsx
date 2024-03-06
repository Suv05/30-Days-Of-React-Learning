import styles from "./FoodItem.module.css";

function FoodItem({ arr }) {
  return (
    <>
      <ul className={"list-group " + styles.ulItems}>
        {arr.map((x) => (
          <li className={"list-group-item " + styles.myItems} key={x}>
            {x}
            <button
              className={"btn btn-outline-warning " + styles.kgbtn}
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
