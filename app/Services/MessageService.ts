import Request from "@ioc:Adonis/Core/Request";
import Encryption from "@ioc:Adonis/Core/Encryption";
import sessionConfig from "Config/session";
import User from "App/Models/User";
import { Socket } from "socket.io";

class MessageService {
  async getCurrentUser(socket) {
    // @ts-ignore
    const SocketRequest = new Request(socket.request, null, Encryption, {})
    const sessionId = SocketRequest.cookie(sessionConfig.cookieName)

    if(!sessionId) {
      return null
    }

    const session = SocketRequest.encryptedCookie(sessionId)
    if(!session || !session.auth_web) {
      return null
    }
    return User.query().where("id", session.auth_web)
  }

  async onMessage(_data: {
    text: string
    chat: number
  }, socket: Socket) {
    const user = await this.getCurrentUser(socket)

    console.log(_data)
  }
}

export default MessageService
