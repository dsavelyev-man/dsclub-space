import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: "widgets",
  widgetGuid: null,
  tab: "content",
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
      state.tab = "content";
      state.widgetGuid = action.payload;
    },
    setTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { toPanel, toSettings, setTab } = panelSlice.actions;

export default panelSlice.reducer;
