import random from "../../helpers/random";
import getShader from "../../helpers/getShader"

class BoardItem {
  static h = 16
  static w = 16
  ctx
  x
  y

  constructor(ctx, x, y) {
    this.ctx = ctx

    this.x = x;
    this.y = y

    const shader = getShader(ctx, "shader-fs")

  }
}

export default BoardItem
