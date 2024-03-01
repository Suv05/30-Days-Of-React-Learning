import styles from "./Item.module.css";

function Item() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.text}>Hello, CSS Modules!</p>
        <p className={styles["my-class"]}>Hello, CSS Modules!</p>
      </div>
    </>
  );
}

export default Item;
