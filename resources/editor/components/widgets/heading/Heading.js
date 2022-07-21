import BaseWidget from "../basic/BaseWidget";
import constants from "../basic/constants";
import Group from "../basic/Group";
import Tab from "../basic/Tab";
import Controller from "../basic/Controller";
import TextController from "../../panel/settings/controllers/TextController";
import TextareaController from "../../panel/settings/controllers/TextareaController";
import AlignmentController from "../../panel/settings/controllers/AlignmentController";

export default class Heading extends BaseWidget {
  constructor() {
    super();

    this.settings = {
      content: new Tab({
        text: new Group("Text", {
          value: new Controller(TextareaController, {
            default: "Hello, world!",
            label: "Text",
          }),
        }),
        settings: new Group("Settings", {
          value: new Controller(AlignmentController, {
            default: 0,
            label: "Text",
            extra: {
              left: 0,
              center: 1,
              right: 2,
              stretch: 3,
            },
          }),
        }),
      }),
      style: new Tab({}),
      advanced: new Tab({}),
    };

    this.list = [
      [
        "div",
        {
          props: {
            id: constants.idPrefix + this.guid,
          },
          children: ["{{content.text.value}}"],
        },
      ],
    ];

    this.html = this.builder(this.list);
  }
}
