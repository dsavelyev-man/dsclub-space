import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Media extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  name: string

  @column()
  path: string

  @column()
  size: number

  @column()
  extension: string

  @column()
  type: string

  @column({ serializeAs: null })
  user_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
