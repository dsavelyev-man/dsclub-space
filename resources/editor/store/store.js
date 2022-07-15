import { configureStore } from "@reduxjs/toolkit";
import PanelReducer from "./reducers/panel/panelReducer";

const reducer = {
  panel: PanelReducer,
};

const store = configureStore({
  reducer,
});

export default store;
