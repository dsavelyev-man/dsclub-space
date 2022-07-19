import { createSlice } from "@reduxjs/toolkit";
import WidgetsManager from "../../../components/widgets/WidgetsManager";
import Widgets from "../../../components/widgets/Widgets";

window.ds = {
  widgets: new Widgets(),
};

const initialState = {
  links: {},
  last: null,
};

// Будет хранить настройки виджетов
export const WidgetsSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    dropWidget: (state, action) => {
      let widgetClass = WidgetsManager.widgets.get(action.payload).component;

      const instance = new widgetClass();

      window.ds.widgets.set(instance.guid, instance);

      state.links[instance.guid] = {
        name: action.payload.name,
        update: instance.guid,
      };

      state.last = instance.guid;
    },
  },
});

export const { dropWidget } = WidgetsSlice.actions;

export default WidgetsSlice.reducer;
