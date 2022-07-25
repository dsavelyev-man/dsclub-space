import Tab from "../basic/Tab";
import Group from "../basic/Group";
import Controller from "../basic/Controller";
import TextareaController from "../../panel/settings/controllers/TextareaController";
import AlignmentController from "../../panel/settings/controllers/AlignmentController";
import SelectController from "../../panel/settings/controllers/SelectController";
import TextController from "../../panel/settings/controllers/TextController";
import DimensionsController from "../../panel/settings/controllers/DimensionsController";

const settings = () => {
  return {
    content: new Tab({
      text: new Group("Text", {
        value: new Controller(TextareaController, {
          default: "Hello, world!",
          label: "Text",
        }),
      }),
      settings: new Group("Settings", {
        alignment: new Controller(AlignmentController, {
          label: "Alignment",
          extra: {
            left: "flex-start",
            center: "center",
            right: "flex-end",
            stretch: "stretch",
          },
        }),

        tag: new Controller(SelectController, {
          default: "h1",
          label: "HTML tag",
          extra: {
            options: [
              ["h1", "h1"],
              ["h2", "h2"],
              ["h3", "h3"],
              ["h4", "h4"],
              ["h5", "h5"],
              ["h6", "h6"],
            ],
          },
        }),

        link: new Controller(TextController, {
          label: "Link",
          extra: {
            placeholder: "example.com",
          },
        }),
      }),
    }),
    style: new Tab({
      position: new Group("Position", {
        margin: new Controller(DimensionsController, {
          label: "Margin",
        }),
        padding: new Controller(DimensionsController, {
          label: "Padding",
        }),
      }),
    }),
    advanced: new Tab({}),
  };
};

export default settings;
