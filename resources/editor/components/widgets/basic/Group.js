import BaseSetting from "./BaseSetting";

export default class Group extends BaseSetting {
  constructor(label, props) {
    super(props);

    this._label = label;
  }
}
