// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Member from "App/Models/Member";

export default class ChatsController {
  async index({ auth }) {
    const chats = await Member.query().where("user_id", auth.user.id).preload("chat")

    return Promise.all(chats.map(async (member) => {
      const chat = member.chat.serialize();

      if(chat.type === "duet") {
        const duetMember = await Member.query().where("chat_id", chat.id).andWhereNot("user_id", auth.user.id).preload("user").first()
        chat.preview_path = duetMember?.user.avatar_path;
        chat.title = duetMember?.user.username
        chat.path = duetMember?.user.id
      }

      return {
        ...(await member.serialize()),
        chat
      }
    }))
  }
}
