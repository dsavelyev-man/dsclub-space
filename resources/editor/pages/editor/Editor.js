import React from "react";
import "../../scss/pages/preview.scss";
import Panel from "../../components/panel/Panel";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const classNames = {
  main: "w-screen h-screen",
};

const Editor = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={classNames.main}>
        <Panel />
      </div>
    </DndProvider>
  );
};

export default Editor;
