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
          }
        }
      },
      style: {

      }
    }

    this.html = `
    ${constants.tagWrapper.start.left + constants.headingTags[0] + constants.tagWrapper.start.right}
    ${this.getValue(["content", "content", "value"])}
    ${constants.tagWrapper.end.left + constants.headingTags[0] + constants.tagWrapper.end.right}
    `;

    console.log(this.html);
  }
}
