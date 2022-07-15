import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: "widgets",
};

export const panelSlice = createSlice({
  name: "panel",
  initialState,
  reducers: {
    setPanel: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setPanel } = panelSlice.actions;

export default panelSlice.reducer;
