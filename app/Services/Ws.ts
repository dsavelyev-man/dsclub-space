import { Server, Socket } from "socket.io";
import AdonisServer from "@ioc:Adonis/Core/Server";
import User from "App/Models/User";
import Request from "@ioc:Adonis/Core/Request";
import Encryption from "@ioc:Adonis/Core/Encryption";
import sessionConfig from "Config/session";
import MessageService from "App/Services/MessageService";

export interface IIoUser {
  sockets: Socket[]
  messageService: MessageService
  rooms: {}
}

class Ws {
  public io: Server
  private booted = false
  public users: {
    [key: string]: IIoUser
  } = {}

  public boot() {
    console.log("boot")
    /**
     * Ignore multiple calls to the boot method
     */
    if (this.booted) {
      return
    }

    this.booted = true
    this.io = new Server(AdonisServer.instance!)
  }

  addSocket(socket: Socket, userId: number, messageService: MessageService) {
    if(!this.users[userId]) {
      this.users[userId] = {
        sockets: [],
        messageService,
        rooms: {}
      }

      messageService.setIoUser(this.users[userId])
    }

    this.users[userId].sockets.push(socket)
  }

  removeSocket(socket: Socket, userId: number) {
    if(this.users[userId]) {
      this.users[userId].sockets = this.users[userId].sockets.filter((s) => s !== socket)

      if(this.users[userId].sockets.length === 0) {
        delete this.users[userId]
      }
    }
  }

  async getCurrentUser(socket): Promise<User|null|undefined> {
    // @ts-ignore
    const SocketRequest = new Request(socket.request, null, Encryption, {})
    const sessionId = SocketRequest.cookie(sessionConfig.cookieName)

    if(!sessionId) {
      return
    }

    const session = SocketRequest.encryptedCookie(sessionId)
    if(!session || !session.auth_web) {
      return
    }

    return User.query().where("id", session.auth_web).first()
  }
}

export default new Ws()
