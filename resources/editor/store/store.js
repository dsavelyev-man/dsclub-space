import { configureStore } from "@reduxjs/toolkit";
import panelReducer from "./reducers/panel/panelReducer";
import widgetsReducer from "./reducers/widgets/widgetsReducer";
import dragReducer from "./reducers/drag/dragReducer";

const reducer = {
  panel: panelReducer,
  widgets: widgetsReducer,
  drag: dragReducer,
};

const store = configureStore({
  reducer,
});

export default store;
