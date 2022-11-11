import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, HasOne, hasOne, ManyToMany, manyToMany } from "@ioc:Adonis/Lucid/Orm";
import User from "App/Models/User";
import Member from "App/Models/Member";
import Message from "App/Models/Message";

export default class Chat extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: string

  @column()
  public owner_id: number|undefined

  @column()
  public preview_path: string|undefined

  @column()
  public title: string|undefined

  @column({ serializeAs: null })
  public lastMessageId: number

  @manyToMany(() => User, {
    pivotTable: "users_to_chats",
    localKey: "id",
    relatedKey: "id",
    pivotForeignKey: "chat_id",
    pivotRelatedForeignKey: "user_id"
  })
  public users: ManyToMany<typeof User>

  @hasMany(() => Member, {
    localKey: "id",
    foreignKey: "chat_id"
  })
  public members: HasMany<typeof Member>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime({ serializeAs: null })
  public lastMessageAt: DateTime

  @hasOne(() => Message)
  public message: HasOne<typeof Message>
}
