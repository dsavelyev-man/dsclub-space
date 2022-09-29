// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FriendsController {
  async index({ request, auth }) {
    const s = request.qs().search;

    //@ts-ignore
    const query = auth.user.related("friends").query();

    if(s) query.where("username", "LIKE", `%${s}%`)

    return query
  }
}
