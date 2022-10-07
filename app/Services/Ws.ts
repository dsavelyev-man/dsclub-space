import { Server } from 'socket.io'
import AdonisServer from '@ioc:Adonis/Core/Server'
import User from "App/Models/User";
import Request from "@ioc:Adonis/Core/Request";
import Encryption from "@ioc:Adonis/Core/Encryption";
import sessionConfig from "Config/session";

class Ws {
  public io: Server
  private booted = false

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
