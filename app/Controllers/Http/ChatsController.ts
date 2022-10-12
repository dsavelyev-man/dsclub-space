// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Member from "App/Models/Member";
import FriendUser from "App/Models/FriendUser";
import User from "App/Models/User";
import Chat from "App/Models/Chat";
import Database from "@ioc:Adonis/Lucid/Database";

export default class ChatsController {
  async index({ auth }) {
    const chats = await Member.query().where("user_id", auth.user.id).preload("chat")

    const data = await Promise.all(chats.map(async (member) => {
      const chat = member.chat.serialize();

      if(chat.type === "duet") {
        const duetMember = await Member.query().where("chat_id", chat.id).andWhereNot("user_id", auth.user.id).preload("user").first()
        chat.preview_path = duetMember?.user.avatar_path;
        chat.title = duetMember?.user.username
        chat.path = duetMember?.user.id
      }

      const memberData = await member.serialize();

      if(!memberData.last_message) return;

      return {
        ...(await memberData),
        chat
      }
    }))

    return data.filter(item => item !== undefined)
  }

  async getFriendChat({auth, request, response}) {
    const params = request.params();
    const id = parseInt(params.id);

    if(!id) {
      response.status(500)

      return {
        message: "id is undefined"
      }
    }

    await FriendUser.query().where("friend_id", id).andWhere("user_id", auth.user.id).firstOrFail()

    const friend = await User.query().where("id", id).firstOrFail()

    let chat = await Database
      .from(Chat.table)
      .where("chats.type", "duet")
      .join("users_to_chats", function() {
        this.on("chats.id", "users_to_chats.chat_id")
          .onIn("users_to_chats.user_id", [id, auth.user_id])
      })
      .select("chats.id")
      .first()

    if(!chat) {
      chat = await Chat.create({
        type: "duet"
      })

      await chat.related("users").attach([id, auth.user.id])
    }

    return chat.id
  }
}
