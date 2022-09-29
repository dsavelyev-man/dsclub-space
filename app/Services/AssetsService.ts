import Application from "@ioc:Adonis/Core/Application";
import { nanoid } from "@reduxjs/toolkit";
import Drive from "@ioc:Adonis/Core/Drive"
import sharp from "sharp"

export default class AssetsService {
  async uploadAsset(asset, baseDir="/images") {
    const date = new Date()

    const tmpPath = `${baseDir}/${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`

    const id = nanoid();

    const name = id + "." + asset.extname;

    await asset.move(Application.tmpPath("assets/tmp" + tmpPath), {
      name
    })

    const tmpStream = await Drive.getStream("tmp" + tmpPath + "/" + name)

    const resizer = await sharp()
      .webp({ quality: 20, lossless: true })

    tmpStream.pipe(resizer)

    await Drive.putStream(tmpPath + "/" + id + ".webp", tmpStream)

    return tmpPath + "/" + id + ".webp"
  }
}