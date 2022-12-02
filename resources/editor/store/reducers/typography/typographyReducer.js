import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onSelectUpdate: null,
};

export const typographySlice = createSlice({
  name: "typography",
  initialState,
  reducers: {
    setEvent(state, action) {
      state.onSelectUpdate = action.payload.onSelectUpdate
    }
  },
});

export const { setEvent } = typographySlice.actions;

export default typographySlice.reducer;
