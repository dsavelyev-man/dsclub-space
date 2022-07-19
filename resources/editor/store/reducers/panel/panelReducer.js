import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: "widgets",
  widgetGuid: null,
};

export const panelSlice = createSlice({
  name: "panel",
  initialState,
  reducers: {
    toPanel: (state, action) => {
      state.current = action.payload;
      state.widgetGuid = null;
    },
    toSettings: (state, action) => {
      state.current = "settings";
      state.widgetGuid = action.payload;
    },
  },
});

export const { toPanel, toSettings } = panelSlice.actions;

export default panelSlice.reducer;
