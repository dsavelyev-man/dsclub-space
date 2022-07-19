import BaseWidget from "../basic/BaseWidget";
import constants from "../basic/constants";

export default class Container extends BaseWidget {
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
