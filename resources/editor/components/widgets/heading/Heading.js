import BaseWidget from "../basic/BaseWidget";
import settings from "./settings";
import dom from "./dom";
import style, { defaultStyle } from "./style";

export default class Heading extends BaseWidget {
  settings = settings();
  list = dom;
  styleList = style;

  constructor() {
    super();
  }

  static defaultStyle = defaultStyle;
}
