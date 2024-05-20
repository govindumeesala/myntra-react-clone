import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bagSlice",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      if (!state.includes(action.payload)) state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter((id) => id !== action.payload);
    },
  },
});

export const bagSliceActions = bagSlice.actions;

export default bagSlice;
