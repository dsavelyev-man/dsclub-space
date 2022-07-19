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
      let containerClass = WidgetsManager.widgets.get("container").component;
      let columnClass = WidgetsManager.widgets.get("column").component;

      const container = new containerClass();
      const column = new columnClass();
      const instance = new widgetClass();

      instance.column = column;
      instance.container = container;

      column.children = [instance];
      column.container = container;

      container.children = [column];

      column.buildHtml();
      container.buildHtml();

      window.ds.widgets.set(instance.guid, instance);
      window.ds.widgets.set(container.guid, container);
      window.ds.widgets.set(column.guid, column);

      state.links[instance.guid] = {
        name: action.payload.name,
        container: container.guid,
        column: column.guid,
        update: instance.guid,
      };
      state.links[container.guid] = {
        name: "container",
        update: container.guid,
      };
      state.links[column.guid] = {
        name: "column",
        container: container.guid,
        update: column.guid,
      };

      state.last = instance.guid;
    },
  },
});

export const { dropWidget } = WidgetsSlice.actions;

export default WidgetsSlice.reducer;
