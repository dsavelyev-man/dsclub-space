import BaseSchema from "@ioc:Adonis/Lucid/Schema";
import ProductType from "App/Models/ProductType";

export default class extends BaseSchema {
  protected tableName = "product_types";

  public async up() {
    this.schema.createTable(this.tableName, async (table) => {
      table.increments("id");

      table.string("title", 255).notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });

      const types: string[] = [
        "Пицца",
        "Закуски",
        "Десерты",
        "Напитки",
        "Соусы",
        "Пицца-половинки",
      ];

      for (const type of types) {
        await ProductType.create({
          title: type,
        });
      }
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
