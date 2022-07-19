import React from "react";
import EdgesensorLowIcon from "@mui/icons-material/EdgesensorLow";
import Heading from "./heading/Heading";
import Button from "./button/Button";
import Container from "./container/Container";
import Column from "./column/Column";

function WidgetsManager() {
  this.widgets = new Map();

  // container
  this.widgets.set("container", {
    name: "container",
    title: "Container",
    component: Container,
    icon: <EdgesensorLowIcon />,
  });
  // container

  // column
  this.widgets.set("column", {
    name: "column",
    title: "Column",
    component: Column,
    icon: <EdgesensorLowIcon />,
  });
  // column

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
