import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
