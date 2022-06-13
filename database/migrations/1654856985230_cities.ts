import BaseSchema from "@ioc:Adonis/Lucid/Schema";
import City from "App/Models/City";
import { isArray } from "lodash";

export default class extends BaseSchema {
  protected tableName = "cities";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");

      table.text("title");
      table.boolean("big");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });

      const cities = [
        ["Москва"],
        ["Краснодар"],
        ["Ростов-на-Дону"],
        ["Санкт-Петербург"],
        "Андреевка",
        "Балашиха",
        "Видное",
        ["Воронеж"],
        "Дзержинский",
        "Дмитров",
        "Долгопрудный",
        "Домодедово",
        "Железнодорожный",
        "Жуковский",
        "Зеленоград",
        "Ивантеевка",
        "Иткара",
        ["Казань"],
        "Коломна",
        "Коммунарка",
        "Королёв",
        "Котельники",
        "Красногорск",
        "Липецк",
        "Лобня",
        "Люберцы",
        "Московский",
        "Мытищи",
        "Наро-Фоминск",
        "Нахабино",
        "Ногинск",
        "Одинцово",
        "Подольск",
        "Путилково",
        "Пушкино",
        "Раменское",
        "Реутов",
        ["Рязань"],
        ["Самара"],
        "Сапроново",
        ["Саратов"],
        "Сергиев Посад",
        "Ступино",
        "Сходня",
        "Троицк",
        "Химки",
        "Щёлково",
        "Щербинка",
        "Электросталь",
        "Ярославль",
      ];

      for (const city of cities) {
        let big = false;
        let title = "";

        if (isArray(city)) {
          big = true;
          title = city[0];
        } else {
          //@ts-ignore
          title = city;
        }

        City.create({
          title,
          big,
        });
      }
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
