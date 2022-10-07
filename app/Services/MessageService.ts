import { Socket } from "socket.io";
import Chat from "App/Models/Chat";
import Member from "App/Models/Member";
import Ws from "App/Services/Ws";
import User from "App/Models/User";
import Message from "App/Models/Message";

interface TBaseMessage {
  text: string
  extra: undefined
  chat: number
}

class MessageService {
  user: User

  constructor() {}

  async init(socket: Socket) {
    const user = await Ws.getCurrentUser(socket)

    if(user) {
      const chatMembers = await Member.query().where("user_id", user.id)

      chatMembers.forEach((member) => {
        socket.join(`chat:${member.chat_id}`)
      })

      this.user = user
    }
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
      const chat = await Chat.query().where("id", _data.chat).first()

      const member = await Member.query().where("chat_id", _data.chat).andWhere("user_id", this.user.id).first()

      if(member && chat) {
        const message = await this.createMessage(_data, chat, member);

        Ws.io.to(`chat:${chat.id}`).emit("message", {
          message: message.serialize(),
          chat: chat.id
        })
      }
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
