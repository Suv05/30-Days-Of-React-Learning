import styles from "./Box.module.css";
import "animate.css";
function Box() {
  function playAnimation(e) {
    console.log(e);
    const animte = document.querySelector("#para");
    animte.classList.add("animate__fadeInLeft");
  }
  return (
    <>
      <div className={styles.container}>
        <h1 id="para">Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio
          dignissimos esse eligendi quos quidem culpa atque excepturi, alias
          est.
        </p>
        <button
          className={"btn btn-outline-danger " + styles.kgbtn}
          onClick={playAnimation}
        >
          Click Me
        </button>
      </div>
    </>
  );
}
export default Box;
