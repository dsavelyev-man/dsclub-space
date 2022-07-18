export default class Widgets extends Map {
  toHtml() {
    let html = "";

    for (const widget of this) {
      html = html + widget[1].getHtml();
    }

    return html;
  }
}
