import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
};

export const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    updateFiles(state, action) {
      state.data = action.payload
    },
    unshiftFile(state, action) {
      state.data.unshift(action.payload)

      if(state.data.length >= 9) {
        state.data.pop()
      }
    }
  },
});

export const { updateFiles, unshiftFile } = filesSlice.actions;

export default filesSlice.reducer;
