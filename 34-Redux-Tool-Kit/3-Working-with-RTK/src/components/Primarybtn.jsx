import React from "react";
import Content from "./Content";
import Render from "./Render";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux";

function Primarybtn({}) {
  //this means can i get the value of joker
  const jokers = useSelector((state) => state.joker);

  //dispatch the action
  const dispatch = useDispatch();

  //handel dispatch
  const handelJoker = () => {
    dispatch(toggle());
  };

  return (
    <>
      {jokers ? <Render /> : <Content />}
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
