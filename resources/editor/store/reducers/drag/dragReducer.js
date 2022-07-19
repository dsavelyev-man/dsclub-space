import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dragging: false,
};

export const dragSlice = createSlice({
  name: "drag",
  initialState,
  reducers: {
    setDrag: (state, action) => {
      state.dragging = action.payload;
    },
  },
});

export const { setDrag } = dragSlice.actions;

export default dragSlice.reducer;
