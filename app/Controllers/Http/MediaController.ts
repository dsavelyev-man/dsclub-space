// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import AssetsService from "App/Services/AssetsService";
import Media from "App/Models/Media";

export default class MediaController {
  async store({request, response, auth}) {
    const file = request.file("file", {
      size: "10mb",
      extnames: ["jpg", "png", "gif"]
    })

    if (!file) {
      return
    }

    if (!file.isValid) {
      response.status(500)

      return file.errors
    }

    const assetsService = new AssetsService()

    const data = await assetsService.uploadAsset(file, "/images", true)

    if (typeof data !== "string") {
      const media = await Media.create({
        user_id: auth.user.id,
        size: file.size,
        extension: file.extname,
        name: data.name,
        path: data.path,
      });

      return media
    } else {
      response.status(500)
      return {
        message: "asset uploader error"
      }
    }
  }

  async index({ auth, request }) {
    const page = request.qs().page || 1

    const media = await Media.query().where("user_id", auth.user.id).orderBy("created_at", "desc").paginate(page, 8)

    return media
  }
}
