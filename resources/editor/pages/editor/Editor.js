import React from "react";
import "../../scss/pages/preview.scss";
import Panel from "../../components/panel/Panel";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Content from "../../components/content/Content";

const classNames = {
  main: "w-screen h-screen flex",
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
