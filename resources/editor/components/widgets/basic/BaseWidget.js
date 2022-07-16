import { v4 as uuidv4 } from 'uuid';

export default class BaseWidget {
  constructor() {
    this.guid = uuidv4()
  }

  getValue(path) {
    let current = this.settings;

    for (const key of path) {
      current = current[key]
    }

    return current.value;
  }
}