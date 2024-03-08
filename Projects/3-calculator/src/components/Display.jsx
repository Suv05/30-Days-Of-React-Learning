import styles from "./Dispaly.module.css";

function Display({ displayValue }) {
  return (
    <input type="text" className={styles.display} value={displayValue} readOnly />
  );
}
export default Display;
