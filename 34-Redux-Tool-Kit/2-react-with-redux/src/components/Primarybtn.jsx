import React from "react";
import Content from "./Content";
import Render from "./Render";
import { useDispatch, useSelector } from "react-redux";

function Primarybtn({}) {
  //this means can i get the value of joker
  const joker = useSelector((state) => state.jokerToggle);

  //dispatch the action
  const dispatch = useDispatch();

  //handel dispatch
  const handelJoker = () => {
    dispatch({ type: "SEE" });
  };

  return (
    <>
      {joker ? <Render /> : <Content />}
      <center>
        <button
          type="button"
          className="btn btn-outline-success btn-lg gap-3"
          fdprocessedid="nbygdm9"
          onClick={handelJoker}
        >
          <i>WANT TO SEE JOKER 🃏</i>
        </button>
      </center>
    </>
  );
}

export default Primarybtn;
