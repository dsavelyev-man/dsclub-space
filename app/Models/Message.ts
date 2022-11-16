import { DateTime } from 'luxon'
import { BaseModel, CherryPick, column } from "@ioc:Adonis/Lucid/Orm";
import Media from "App/Models/Media";

export default class Message extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public text: string|undefined

  @column({
    consume: (data) => {
      return JSON.parse(data);
    },
    prepare: (data) => {
      return JSON.stringify(data);
    },
  })
  public extra: {}|undefined

  @column({
    serializeAs: null
  })
  public chat_id: number

  @column()
  public user_id: number

  @column({
    serialize: (big) => !!big,
  })
  public read: boolean;

  public async serialize(cherryPick?: CherryPick) {
    const object = super.serialize(cherryPick)

    if(object.extra) {

      if(object.extra.files) {
        object.extra.files = await Media.query().whereIn("id", object.extra.files)
      }
    }

    return object
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
