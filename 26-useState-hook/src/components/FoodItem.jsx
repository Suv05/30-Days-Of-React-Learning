import styles from "./FoodItem.module.css";

function FoodItem({ arr }) {
  return (
    <>
      <ul className="list-group">
        {arr.map((x) => (
          <li className={"list-group-item " + styles.myItem}>{x}</li>
        ))}
      </ul>
    </>
  );
}
export default FoodItem;
