import BaseWidget from "../basic/BaseWidget";
import constants from "../basic/constants";

export default class Heading extends BaseWidget {
  constructor() {
    super();

    this.settings = {
      content: {
        content: {
          value: {
            value: "Hello, world!",
          },
        },
      },
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
