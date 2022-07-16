import { configureStore } from "@reduxjs/toolkit";
import PanelReducer from "./reducers/panel/panelReducer";
import WidgetsReducer from "./reducers/widgets/WidgetsReducer";

const reducer = {
  panel: PanelReducer,
  widgets: WidgetsReducer,
};

const store = configureStore({
  reducer,
});

export default store;
