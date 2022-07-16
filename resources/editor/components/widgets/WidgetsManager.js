import React from "react";
import EdgesensorLowIcon from "@mui/icons-material/EdgesensorLow";
import Heading from "./heading/Heading";
import Button from "./button/Button";

function WidgetsManager() {
  this.widgets = new Map();

  // heading
  this.widgets.set("heading", {
    name: "heading",
    title: "Heading",
    component: Heading,
    icon: <EdgesensorLowIcon />,
  });
  // heading

  // button
  this.widgets.set("button", {
    name: "button",
    title: "Button",
    component: Button,
    icon: <EdgesensorLowIcon />,
  });
  // button

  return {
    widgets: this.widgets,
    toArray: () => {
      const widgets = [];

      this.widgets.forEach((widget) => widgets.push(widget));

      return widgets;
    },
  };
}

export default new WidgetsManager();
