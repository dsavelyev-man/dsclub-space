// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";
import FriendUser from "App/Models/FriendUser";
import FriendRequest from "App/Models/FriendRequest";

export default class FriendsController {
  async index({ request, auth }) {
    const qs = request.qs();
    const s = qs.search;
    const page = qs.page || 1;

    //@ts-ignore
    const query = auth.user.related("friends").query();

    if(s) query.where("username", "LIKE", `%${s}%`)

    return (await query.paginate(page, 20)).serialize().data
  }

  async show({ request, auth }) {
    const qs = request.qs();
    const s = qs.search;
    const page = qs.page || 1;

    //@ts-ignore
    const query = User.query().whereNot("id", auth.user.id);

    if(s) query.where("username", "LIKE", `%${s}%`)

    const data = (await query.paginate(page, 20)).serialize().data;

    return Promise.all(data.map(async (user) => {
      const friendUser = await FriendUser.query().where("user_id", auth.user.id).andWhere("friend_id", user.id).first()
      const requestDuplicate = await FriendRequest.query()
        .where("user_id", auth.user.id)
        .andWhere("recipient_id", user.id)
        .orWhere("user_id", user.id)
        .andWhere("recipient_id", auth.user.id).first()


      return {
        ...user,
        request_creator: requestDuplicate?.user_id,
        isFriend: !!friendUser
      }
    }))
  }

  async add({ request, response, auth }) {
   const user_id = request.input("user_id")

    if(user_id) {
      const user = await User.query().where("id", user_id).firstOrFail()

      const userIsFriends = await FriendUser.query().where("friend_id", user_id).andWhere("user_id", auth.user.id).first()

      if(!userIsFriends) {
        const requestDuplicate = await FriendRequest.query()
          .where("user_id", auth.user.id)
          .andWhere("recipient_id", user.id)
          .orWhere("user_id", user.id)
          .andWhere("recipient_id", auth.user.id).first()

        if(!requestDuplicate) {
          try {
            await FriendRequest.create({
              user_id: auth.user.id,
              recipient_id: user.id,
            })

            return {
              success: true
            }
          } catch (e) {
            response.status(500)

            return {
              message: e
            }
          }
        } else {
          response.status(500)

          return {
            message: "request already created"
          }
        }
      } else {
        response.status(500)

        return {
          message: "users already friends"
        }
      }
    } else {
      response.status(500)

      return {
        message: "user_id is undefined"
      }
    }
  }
}
