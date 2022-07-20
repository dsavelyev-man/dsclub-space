import BaseWidget from "../basic/BaseWidget";
import constants from "../basic/constants";
import Group from "../basic/Group";
import Tab from "../basic/Tab";

export default class Heading extends BaseWidget {
  constructor() {
    super();

    this.settings = {
      content: new Tab({
        content: new Group({
          value: {
            value: "Hello, world!",
          },
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
