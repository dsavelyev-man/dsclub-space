import Group from "../basic/Group";
import Controller from "../basic/Controller";
import DimensionsController from "../../panel/settings/controllers/DimensionsController";
import NumberController from "../../panel/settings/controllers/NumberController";
import TextController from "../../panel/settings/controllers/TextController";

const position = new Group("Position", {
  margin: new Controller(DimensionsController, {
    label: "Margin",
  }),
  padding: new Controller(DimensionsController, {
    label: "Padding",
  }),
  zIndex: new Controller(NumberController, {
    label: "Z-index",
  }),
  css: new Controller(TextController, {
    label: "CSS classes",
  }),
  id: new Controller(TextController, {
    label: "JS ID",
  }),
});

export const positionStyle = [
  ["dimensions", "margin", "advanced.position.margin"],
  ["dimensions", "padding", "advanced.position.padding"],
  ["", "z-index", "advanced.position.zIndex"]
]

export default position;
