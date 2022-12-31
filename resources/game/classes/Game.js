import Board from "./board/Board";

class Game {
  ctx
  board

  constructor(ctx) {
    this.ctx = ctx
    this.board = new Board(ctx)
  }
}

export default Game
