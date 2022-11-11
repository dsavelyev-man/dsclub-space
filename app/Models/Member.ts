import { DateTime } from 'luxon'
import { BaseModel, CherryPick, column, HasOne, hasOne } from "@ioc:Adonis/Lucid/Orm";
import Chat from "App/Models/Chat";
import User from "App/Models/User";
import Message from "App/Models/Message";

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

  public async serialize(cherryPick?: CherryPick) {
    const object = super.serialize(cherryPick)

    const message = await Message.query().where("chat_id", this.chat_id).orderBy("created_at", "desc").first()

    if(object.chat) {
      object.last_message = message
    }

    return object
  }

  @column({ serializeAs: null })
  public lastMessageId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime({ serializeAs: null })
  public lastMessageAt: DateTime

  @hasOne(() => Message)
  public message: HasOne<typeof Message>
}
