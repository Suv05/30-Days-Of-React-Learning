import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calValue, setCalValue] = useState("");

  function showText(event) {
    //tells what is pressed
    let btnText = event.currentTarget.innerText;

    //when c is pressed
    if (btnText === "C") {
      setCalValue("");
    }//eval will calculatethe 
     else if (btnText === "=") {
      const result = eval(calValue);
      setCalValue(result.toString());
    } else {
      let newDisplayValue = calValue + btnText;
      setCalValue(newDisplayValue);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayValue={calValue}></Display>
      <ButtonsContainer handelOnClick={showText}></ButtonsContainer>
    </div>
  );
}

export default App;
