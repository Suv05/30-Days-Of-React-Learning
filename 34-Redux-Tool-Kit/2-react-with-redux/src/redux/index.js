import { createStore } from "redux";

let INTIAL_VALUE = {
  counter: 0,
};

const counterReducer = (state = INTIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  } else if (action.type === "ADD") {
    return { counter: state.counter + Number(action.payload.num) };
  } else if (action.type === "SUB") {
    return { counter: state.counter - action.payload.num };
  }
  return state;
};

const CounterValue = createStore(counterReducer);

export default CounterValue;
