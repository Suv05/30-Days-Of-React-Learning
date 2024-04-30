import { createStore } from "redux";

let INTIAL_VALUE = {
  counter: 0,
};

const counterReducer = (state = INTIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const CounterValue = createStore(counterReducer);

export default CounterValue;
