import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create slice for counter operatons like add sub
const counterSlice = createSlice({
  name: "counterxyz", //use this name when to acess any value
  initialState: { counters: 0 },
  reducers: {
    increment: (state, action) => {
      state.counters += 1;
    },
    decrement: (state, action) => {
      state.counters -= 1;
    },
    add: (state, action) => {
      state.counters += action.payload;
    },
    sub: (state, action) => {
      state.counters -= action.payload;
    },
  },
});

//create slice for toggle joker
const jokerSlice = createSlice({
  name: "joker",
  initialState: false,
  reducers: {
    toggle: (state, action) => {
      return (state = !state);
    },
  },
});
// Configure store
const CounterValue = configureStore({
  reducer: {
    counterxyz: counterSlice.reducer,
    joker: jokerSlice.reducer,
  },
});

// Export actions of counter slice
export const { increment, decrement, add, sub } = counterSlice.actions;
//Export actions of joker slice
export const { toggle } = jokerSlice.actions;

// Export the main store
export default CounterValue;
