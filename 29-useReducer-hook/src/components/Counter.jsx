import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

function Counter() {
  //intialize state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  //dispatch action to update state
  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  return (
    <div>
      count:{state.count}
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>sub</button>
    </div>
  );
}

export default Counter;
