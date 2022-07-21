import BaseWidget from "../basic/BaseWidget";
import constants from "../basic/constants";
import Group from "../basic/Group";
import Tab from "../basic/Tab";
import Controller from "../basic/Controller";
import TextController from "../../panel/settings/controllers/TextController";

export default class Heading extends BaseWidget {
  constructor() {
    super();

    this.settings = {
      content: new Tab({
        content: new Group("Content", {
          value: new Controller(TextController, {
            default: "Hello, world!",
            label: "Text",
          }),
        }),
        g: new Group("Super content", {
          value: new Controller(TextController, {
            default: "Hello, world!",
            label: "Text",
          }),
        }),
        sg: new Group("sssss content", {
          value: new Controller(TextController, {
            default: "Hello, world!",
            label: "Text",
          }),
        }),
      }),
      style: {},
    };

    this.list = [
      [
        "div",
        {
          props: {
            id: constants.idPrefix + this.guid,
          },
          children: ["{{content.content.value}}"],
        },
      ],
    ];

    this.html = this.builder(this.list);
  }
}
