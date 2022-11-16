import Ws from "../app/Services/Ws"
import MessageService from "App/Services/MessageService";
import { Socket } from "socket.io";

Ws.boot()

Ws.io.on("connection", async (socket: Socket) => {
  const messageService = new MessageService()

  await messageService.init(socket)

  if(!messageService.user) {
    socket.disconnect()
    return
  }

  Ws.addSocket(socket, messageService.user.id, messageService)

  socket.on("message", (data) => messageService.onMessage(data, socket))
  socket.on("read", (data) => messageService.onRead(data, socket))

  socket.on("disconnect", (socket: Socket) => {
    Ws.removeSocket(socket, messageService.user.id)
  })
})
