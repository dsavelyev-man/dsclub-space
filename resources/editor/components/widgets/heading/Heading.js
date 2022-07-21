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

    //settings
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
        }),
      }),
      style: new Tab({}),
      advanced: new Tab({}),
    };
    //settings

    //list
    this.list = [
      [
        "{{content.settings.tag}}",
        {
          props: {
            id: constants.idPrefix + this.guid,
            class: "ds-heading",
          },
          children: ["{{content.text.value}}"],
        },
      ],
    ];
    //list

    //style list
    this.styleList = ["&", ["", "justify-content", "content.settings.alignment"], "}"];
    //style list

    this.style = this.generateStyle(this.styleList);
    this.html = this.builder(this.list);
  }

  static defaultStyle = `
    .ds-heading {
      display: flex
    }
  `;
}
