import styles from "./Box.module.css";
import "animate.css";

function Box(props) {
  return (
    <>
      <div className={styles.container}>
        <h1 id="para" className={styles.animate__fadeInLeft}>
          Hello World
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio
          dignissimos esse eligendi quos quidem culpa atque excepturi, alias
          est.
        </p>
        <button
          className={"btn btn-outline-danger " + styles.kgbtn}
          onClick={props.whenClick}
        >
          Click Me
        </button>
      </div>
    </>
  );
}
export default Box;
