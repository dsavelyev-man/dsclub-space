import Ws from "../app/Services/Ws"
import MessageService from "App/Services/MessageService";

Ws.boot()

const messageService = new MessageService()

Ws.io.on("connection", (socket) => {
  socket.on("message", (data) => messageService.onMessage(data, socket))
})
