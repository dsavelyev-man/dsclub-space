import { v4 as uuidv4 } from "uuid";
import constants from "./constants";
import clone from "lodash/clone";
import { get } from "object-path";
import isString from "lodash/isString";

export default class BaseWidget {
  constructor() {
    this.guid = uuidv4();
  }

  getValue(path) {
    return get(this.settings, path)?.value || "Error";
  }

  getHtml() {
    return this.html;
  }

  prop(name, value) {
    if (name === "class") {
      return `${name}="ds-element ${value}"`;
    } else {
      return `${name}="${value}"`;
    }
  }

  tag(tag, end = false, props) {
    let propsString = "";

    let hasClass = false;

    for (const prop in props) {
      propsString = propsString + this.prop(prop, props[prop]) + " ";

      if (prop === "class") hasClass = true;
    }

    if (!hasClass) {
      propsString = propsString + `class="${constants.basicClass}"`;
    }

    console.log(propsString);

    if (!end) {
      return (
        constants.tagWrapper.start.left +
        tag +
        (propsString ? " " + propsString : "") +
        constants.tagWrapper.start.right
      );
    } else {
      return constants.tagWrapper.end.left + tag + constants.tagWrapper.end.right;
    }
  }

  replaceByController(string) {
    const match = string.match(/{{.*?}}/g);

    if (match) {
      let newString = clone(string);

      for (let needReplace of match.reverse()) {
        const path = needReplace.slice(0, needReplace.length - 2).slice(2);

        newString = newString.replace(needReplace, this.getValue(path));
      }

      return newString;
    }

    return string;
  }

  builder(list) {
    let string = "";

    for (const elem of list) {
      if (isString(elem)) {
        string = string + this.replaceByController(elem);

        continue;
      }

      const tag = this.replaceByController(elem[0]);

      let elemString = "";

      elemString = elemString + this.tag(tag, false, elem[1]?.props);

      if (elem[1]?.children) {
        elemString = elemString + this.builder(elem[1].children);
      }

      elemString = elemString + this.tag(tag, true);

      string = string + elemString;
    }

    return string;
  }
}
