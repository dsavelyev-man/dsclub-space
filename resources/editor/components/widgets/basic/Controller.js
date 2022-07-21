import isString from "lodash/isString";

export default class Controller {
  constructor(controller, props) {
    this.component = controller;
    this.value = props.value;
    this.default = props.default;
    this.label = props.label;
    this.extra = props.extra;
  }

  getValue() {
    return this.value || this.default;
  }

  setValue(value) {
    this.value = value;
  }
}
