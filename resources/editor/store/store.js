import { configureStore } from "@reduxjs/toolkit";
import panelReducer from "./reducers/panel/panelReducer";
import widgetsReducer from "./reducers/widgets/widgetsReducer";
import dragReducer from "./reducers/drag/dragReducer";
import typographyReducer from "./reducers/typography/typographyReducer";

const reducer = {
  panel: panelReducer,
  widgets: widgetsReducer,
  drag: dragReducer,
  typography: typographyReducer
};

const store = configureStore({
  reducer,
});

export default store;
