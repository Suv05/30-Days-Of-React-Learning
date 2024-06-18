import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState:[],
  reducers:{
    addIntialItems:(store,action)=>{
        return store;

    }
  }
});
