import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addIntialItems: (state, action) => {
      return state;
    },
  },
});

export const { addIntialItems } = itemSlice.actions;
export default itemSlice;
