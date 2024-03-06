import styles from "./MenuHeader.module.css";

function MenuHeader(props) {
  return (
    <>
      <h1 className="text-center">FOOD MENU</h1>
      <p className="text-center">paucek and large resturant</p>
      <hr />
      <center>
        <input
          type="text"
          placeholder="Enter food item"
          className={styles.kgInput}
          onKeyDown={props.onKeyDown}
        />
      </center>
    </>
  );
}

export default MenuHeader;
