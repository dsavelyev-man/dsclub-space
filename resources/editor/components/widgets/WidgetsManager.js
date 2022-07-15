import React from "react";
import EdgesensorLowIcon from "@mui/icons-material/EdgesensorLow";

function WidgetsManager() {
  this.widgets = new Map();

  // heading
  this.widgets.set("heading", {
    name: "heading",
    title: "Heading",
    componentPath: "widgets/heading/Heading",
    icon: <EdgesensorLowIcon />,
  })
  // heading

  // button
  this.widgets.set("button", {
    name: "button",
    title: "Button",
    componentPath: "widgets/button/Button",
    icon: <EdgesensorLowIcon />,
  })
  // button

  return {
    widgets: this.widgets,
    toArray: () => {
      const widgets = [];

      this.widgets.forEach(widget => widgets.push(widget));

      return widgets;
    }
  };
}

export default new WidgetsManager();
