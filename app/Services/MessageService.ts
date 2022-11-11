import { Socket } from "socket.io";
import Chat from "App/Models/Chat";
import Member from "App/Models/Member";
import Ws, { IIoUser } from "App/Services/Ws";
import User from "App/Models/User";
import Message from "App/Models/Message";

interface TBaseMessage {
  text: string
  extra: undefined
  chat: number
}

class MessageService {
  user: User
  ioUser: IIoUser

  constructor() {}

  async init(socket: Socket) {
    const user = await Ws.getCurrentUser(socket)

    if(user) {
      const chatMembers = await Member.query().where("user_id", user.id)

      chatMembers.forEach((member) => {
        socket.join(`chat:${member.chat_id}`)

        if(this.ioUser) {
          this.ioUser.rooms[`chat:${member.chat_id}`] = true
        }
      })

      this.user = user
    }
  }

  setIoUser(ioUser: IIoUser) {
    this.ioUser = ioUser
  }

  async createMessage(_data: TBaseMessage, chat: Chat, member: Member): Promise<Message> {
    const message = await Message.create({
      chat_id: chat.id,
      user_id: this.user.id,
      text: _data.text,
      extra: _data.extra,
    })

    return message
  }

  async onMessage(_data: TBaseMessage, socket: Socket) {
    if(!_data.extra && !_data.text) return

    if(this.user) {
      const chat = await Chat.query().where("id", _data.chat).preload("members").first()

      if(!chat) return

      const member = chat.members.find((m) => m.user_id === this.user.id)

      if(!member) return

      const message = await this.createMessage(_data, chat, member);

      chat.members.forEach((m) => {
        const ioUser = Ws.users[m.user_id];

        if(!ioUser) return;

        if(!ioUser.rooms[`chat:${chat.id}`]) {
          ioUser.sockets.forEach((s) => {
            s.join(`chat:${chat.id}`)
          })
        }

      })

      chat.lastMessageId = message.id
      chat.lastMessageAt = message.updatedAt

      chat.save()

      member.lastMessageId = message.id
      member.lastMessageAt = message.updatedAt

      member.save()

      Ws.io.to(`chat:${chat.id}`).emit("message", {
        message: message.serialize(),
        chat: chat.id
      })
    }
  }

  async onRead(_data: {
    chat: number
    message: number
  }, socket: Socket) {

    if(this.user) {
      const chat = await Chat.query().where("id", _data.chat).first()

      const member = await Member.query().where("chat_id", _data.chat).andWhere("user_id", this.user.id).first()

      if(chat && member) {
        const message = await Message.query().where("id", _data.message).first()

        if(message) {
          message.read = true

          try {
            await message.save()

            Ws.io.to(`chat:${chat.id}`).emit("read", {
              message: message.id,
              chat: chat.id
            })
          } catch {}
        }
      }
    }
  }
}

export default MessageService
