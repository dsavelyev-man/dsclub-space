import BaseWidget from "../basic/BaseWidget";
import constants from "../basic/constants";
import settings from "./settings";
import dom from "./dom";

export default class Column extends BaseWidget {
  isColumn = true;
  children = [];

  constructor() {
    super();

    this.settings = settings();
  }

  buildHtml() {
    this.list = dom;

    this.html = this.builder(this.list(this));
  }
}
