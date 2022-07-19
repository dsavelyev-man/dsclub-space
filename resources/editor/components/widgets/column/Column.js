import BaseWidget from "../basic/BaseWidget";
import constants from "../basic/constants";

export default class Column extends BaseWidget {
  isColumn = true;
  children = [];

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
  }

  buildHtml() {
    this.list = [
      [
        "div",
        {
          props: {
            class: "ds-column",
            id: constants.idPrefix + this.guid,
          },
          children: this.children,
        },
      ],
    ];

    this.html = this.builder(this.list);
  }
}
