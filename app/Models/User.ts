import { DateTime } from "luxon";
import Hash from "@ioc:Adonis/Core/Hash";
import { column, beforeSave, BaseModel, manyToMany, ManyToMany } from "@ioc:Adonis/Lucid/Orm";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public username: string;

  @column({ serializeAs: null })
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public avatar_path: string;

  @column()
  public rememberMeToken?: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }

  @manyToMany(() => User, {
    pivotTable: "friends_to_users",
    localKey: "id",
    relatedKey: "id",
    pivotForeignKey: "user_id",
    pivotRelatedForeignKey: "friend_id"
  })
  public friends: ManyToMany<typeof User>
}
