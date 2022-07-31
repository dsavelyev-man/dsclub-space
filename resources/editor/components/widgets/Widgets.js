export default class Widgets extends Map {
  getFirstContainer() {
    let container = [];

    for (const widget of this) {
      if (widget[1].isContainer) {
        container = widget;
        break;
      }
    }

    return container[1];
  }

  toHtml() {
    let html = "";

    for (const widget of this) {
      if (widget[1].isContainer) {
        html = html + widget[1].getHtml();
      }
    }

    html = html + this.toStyle();

    return html;
  }

  toStyle() {
    let style = "";

    for (const widget of this) {
      style = style + widget[1].getStyle();
    }

    for (const widgetKey in window.ds.added) {
      style = style += window.ds.added[widgetKey].defaultStyle;
    }

    return `<style>${style}</style>`;
  }
}
