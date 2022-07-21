import BaseWidget from "../basic/BaseWidget";
import constants from "../basic/constants";
import Group from "../basic/Group";
import Tab from "../basic/Tab";
import Controller from "../basic/Controller";
import TextController from "../../panel/settings/controllers/TextController";
import TextareaController from "../../panel/settings/controllers/TextareaController";
import AlignmentController from "../../panel/settings/controllers/AlignmentController";
import SelectController from "../../panel/settings/controllers/SelectController";

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
          alignment: new Controller(AlignmentController, {
            default: 0,
            label: "Alignment",
            extra: {
              left: 0,
              center: 1,
              right: 2,
              stretch: 3,
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
        }),
      }),
      style: new Tab({}),
      advanced: new Tab({}),
    };

    this.list = [
      [
        "{{content.settings.tag}}",
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
