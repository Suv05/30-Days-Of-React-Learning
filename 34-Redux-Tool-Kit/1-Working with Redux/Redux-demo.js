const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};

// Reducer set-up
const reducer = (state = INITIAL_VALUE, action) => {
  if (action.type === "Increment") {
    return { counter: state.counter + 1 };
  } else if (action.type === "Decrement") {
    return { counter: state.counter - 1 };
  } else if (action.type === "Addition") {
    return { counter: state.counter + action.payload.number };
  }

  return state;
};

// Store setup
const store = redux.createStore(reducer);

// Subscriber setup
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "Increment" }); // 1
store.dispatch({ type: "Decrement" }); // 1
store.dispatch({ type: "Increment" }); // 2
store.dispatch({ type: "Addition", payload: { number: 7 } }); // 3

// Output: { counter: 1 }
