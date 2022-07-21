import React from "react";
import "../../scss/pages/preview.scss";
import Panel from "../../components/panel/Panel";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Content from "../../components/content/Content";
import Widgets from "../../components/widgets/Widgets";
import WidgetsManager from "../../components/widgets/WidgetsManager";

window.ds = {
  widgets: new Widgets(),
  added: {
    column: WidgetsManager.widgets.get("column").component,
    container: WidgetsManager.widgets.get("container").component,
  },
};

const classNames = {
  main: "h-screen flex ",
};

const Editor = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={classNames.main}>
        <Panel />
        <Content />
      </div>
    </DndProvider>
  );
};

export default Editor;
