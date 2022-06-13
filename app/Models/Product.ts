import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public title: string;

  @column()
  public description: string;

  @column()
  public image_url: string;

  @column()
  public price1: number;

  @column()
  public price2: number;

  @column()
  public price3: number;

  @column({ serializeAs: null })
  public type_id: number;

  @column({ serializeAs: null })
  public product_type: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
