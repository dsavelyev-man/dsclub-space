// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import FriendRequest from "App/Models/FriendRequest";
import User from "App/Models/User";
import FriendUser from "App/Models/FriendUser";

export default class FriendRequestsController {
  async index({ request, auth }) {
    const qs = request.qs();
    const s = qs.search;
    const page = qs.page || 1;

    const query = FriendRequest.query()
      .where("recipient_id", auth.user.id)

    if(s) query.andWhere("username", "LIKE", `%${s}%`)

    const data = (await query.paginate(page, 20)).serialize().data

    return Promise.all(data.map(async (request) => {
      try {
        const user = await User.query().where("id", request.user_id).firstOrFail()

        return {
          ...user.serialize(),
          request_id: request.id
        }
      } catch {
        return null
      }

    }))
  }

  async store({ request, auth, response }) {
    const request_id = request.input("request_id");

    if(!request_id) {
      response.status(500)

      return {
        message: "request_id is undefined"
      }
    }

    const r = await FriendRequest.query().where("id", request_id).firstOrFail()

    const friendDuplicate = await FriendUser.query().where("user_id", auth.user.id).andWhere("friend_id", r.user_id).first()

    if(friendDuplicate) {
      response.status(500)

      return {
        message: "users already friends"
      }
    }

    try {
      await FriendUser.create({
        user_id: auth.user.id,
        friend_id: r.user_id
      })
      await FriendUser.create({
        user_id: r.user_id,
        friend_id: auth.user.id
      })
      await r.delete()

      return {
        success: true
      }
    } catch (e) {
      response.status(500)

      return {
        message: e
      }
    }
  }
}
