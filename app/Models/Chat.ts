import { DateTime } from 'luxon'
import { BaseModel, CherryPick, column, ManyToMany, manyToMany } from "@ioc:Adonis/Lucid/Orm";
import User from "App/Models/User";

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

  @manyToMany(() => User, {
    pivotTable: "users_to_chats",
    localKey: "id",
    relatedKey: "id",
    pivotForeignKey: "chat_id",
    pivotRelatedForeignKey: "user_id"
  })
  public users: ManyToMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
