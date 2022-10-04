import { io } from "socket.io-client";

class Ws {
  constructor() {
    this.io = io()
  }
}

export default Ws
