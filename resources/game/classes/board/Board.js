import BoardItem from "./BoardItem";

class Board {
  ctx
  grid = [];

  constructor(ctx) {
    this.ctx = ctx

    const basicGridWidth = window.canvas.width / BoardItem.w
    const basicGridHeight = window.canvas.height / BoardItem.h

    this.generate(basicGridHeight, basicGridWidth)

    console.log(this.grid, basicGridWidth, basicGridHeight)
  }

  generate(yHeight, xWidth) {

    let yi = 0;
    for(let y = 0; yi<yHeight;) {
      this.grid[yi] = []

      let xi = 0;
      for(let x = 0; xi<xWidth;) {
        this.grid[yi][xi] = new BoardItem(this.ctx, x, y)

        xi = xi + 1
        x = x + BoardItem.w
      }

      yi = yi + 1
      y = y + BoardItem.h
    }
  }
}

export default Board
