import { createStore } from "redux";

let INTIAL_VALUE = {
  counter: 0,
  jokerToggle: false,
};

const counterReducer = (state = INTIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...state, counter: state.counter - 1 };
  } else if (action.type === "ADD") {
    return { ...state, counter: state.counter + Number(action.payload.num) };
  } else if (action.type === "SUB") {
    return { ...state, counter: state.counter - action.payload.num };
  } else if (action.type === "SEE") {
    return { ...state, jokerToggle: !state.jokerToggle };
  }
  return state;
};

const CounterValue = createStore(counterReducer);

export default CounterValue;
