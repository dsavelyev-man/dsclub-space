export default class BaseSetting {
  constructor(props) {
    for (const prop in props) {
      this[prop] = props[prop];
    }
  }

  toArray() {
    const settings = [];

    for (const settingKey in this) {
      if (settingKey.startsWith("_")) continue;

      this[settingKey]._name = settingKey;

      settings.push(this[settingKey]);
    }

    return settings;
  }
}
