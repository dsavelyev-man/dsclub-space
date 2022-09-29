import { DateTime } from 'luxon'
import { BaseModel, CherryPick, column, HasOne, hasOne } from "@ioc:Adonis/Lucid/Orm";
import Chat from "App/Models/Chat";
import User from "App/Models/User";

export default class Member extends BaseModel {
  static table = "users_to_chats"

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null })
  public chat_id: number

  @column({ serializeAs: null })
  public user_id: number

  @hasOne(() => Chat, {
    localKey: "chat_id",
    foreignKey: "id"
  })
  public chat: HasOne<typeof Chat>

  @hasOne(() => User, {
    localKey: "user_id",
    foreignKey: "id"
  })
  public user: HasOne<typeof User>

  public serialize(cherryPick?: CherryPick) {
    const object = super.serialize(cherryPick)

    if(object.chat) object.last_message = "Hello world"

    return object
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
