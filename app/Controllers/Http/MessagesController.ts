// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Message from "App/Models/Message";
import MessageFactory from "Database/factories/MessageFactory";

export default class MessagesController {
  async index({ request, response }) {
    const qs = request.qs();
    const page = qs.page || 1
    const chat = qs.chat

    if(!chat) {
      response.status(500)

      return {
        message: "chat id is undefined"
      }
    }

    const messages = await Message.query().orderBy("created_at", "desc").where("chat_id", chat).paginate(page, 40)

    return (await Promise.all(messages.serialize().data)).reverse()
  }
}
