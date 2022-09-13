// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from "@ioc:Adonis/Core/Validator"
import AssetsService from "App/Services/AssetsService";
import User from "App/Models/User";

//@ts-ignore
global.window = {}

export default class UsersController {
  async auth({ auth }) {
    await auth.use('web').check()

    return {
      isGuest: !auth.use("web").isLoggedIn,
      user: auth.user
    }
  }

  async login({ request, auth, response }) {
    const userSchema = schema.create({
      email: schema.string({}, [
        rules.email(),
      ]),
      password: schema.string({}, [
        rules.minLength(6)
      ]),
    })

    const payload = await request.validate({ schema: userSchema })

    try {
      await auth.use("web").attempt(payload.email, payload.password)

    } catch(e) {
      return response.badRequest('Invalid credentials')
    }

    return auth.user
  }

  async registration({ request, auth,  response}) {
    const userSchema = schema.create({
      email: schema.string({}, [
        rules.email(),
        rules.unique({ table: "users", column: "email" })
      ]),
      password: schema.string({}, [
        rules.confirmed(),
        rules.minLength(6)
      ]),
      username: schema.string({}, [
        rules.minLength(3),
        rules.unique({ table: "users", column: "username" })
      ]),
      password_confirmation: schema.string(),
      avatar: schema.file({
        size: "2mb",
        extnames: ["jpg", "gif", "png"]
      })
    })

    const payload = await request.validate({ schema: userSchema })

    const avatar = payload.avatar

    let avatar_path;

    if (avatar) {
      const assetsService = new AssetsService()

      avatar_path = await assetsService.uploadAsset(avatar)
    }

    const user = await User.create({
      username: payload.username,
      password: payload.password,
      email: payload.email,
      avatar_path,
    })

    return {
      success: true
    }
  }
}
