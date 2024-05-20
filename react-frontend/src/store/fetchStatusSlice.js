import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    fetchingCurrently: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    setFetchingCurrently: (state) => {
      state.fetchingCurrently = true;
    },
    unsetFetchingCurrently: (state) => {
      state.fetchingCurrently = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
