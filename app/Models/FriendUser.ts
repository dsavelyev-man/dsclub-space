import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class FriendUser extends BaseModel {
  public static table = "friends_to_users"

  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public friend_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
