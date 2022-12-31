import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGuest: true,
  data: null,
  loaded: false
};

export const dragSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.isGuest = action.payload.isGuest;
      state.data = action.payload.user;
      state.loaded = true;
    }
  },
});

export const { updateUser } = dragSlice.actions;

export default dragSlice.reducer;
