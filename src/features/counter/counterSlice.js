import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 550,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 4;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },    
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
