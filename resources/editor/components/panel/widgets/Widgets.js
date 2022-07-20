import React from "react";
import WidgetsManager from "../../../components/widgets/WidgetsManager";
import Widget from "./Widget";
import { Scrollbars } from "react-custom-scrollbars";

const classNames = {
  container: "grid gap-4 p-2 grid-cols-2 auto-rows-max",
};

const Widgets = () => {
  return (
    <Scrollbars style={{ height: "calc(100vh - 48px)" }}>
      <div className={classNames.container}>
        {WidgetsManager.toArray()
          .filter((widget) => widget.name !== "container" && widget.name !== "column")
          .map((widget) => (
            <Widget widget={widget} key={widget.name} />
          ))}
      </div>
    </Scrollbars>
  );
};

export default Widgets;
