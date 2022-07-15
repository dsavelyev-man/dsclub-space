import BaseSchema from "@ioc:Adonis/Lucid/Schema";
import Product from "App/Models/Product";

export default class extends BaseSchema {
  protected tableName = "products";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");

      table.string("title", 255).notNullable();
      table.string("image_url").notNullable();
      table.text("description").notNullable();
      table.string("product_type").notNullable();
      table.integer("price1");
      table.integer("price2");
      table.integer("price3");

      table.bigInteger("type_id");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });

      let products: {
        title: string;
        description: string;
        image_url: string;
        type_id: number;
        price1?: number;
        price2?: number;
        price3?: number;
        product_type?: string;
      }[] = [
        // {
        //   title: "Пицца-половинки",
        //   image_url: "/images/pizza/products/1.jpeg",
        //   description: "Собери свою пиццу - соедини две любимые пиццы",
        //   type_id: 6,
        // },
        {
          title: "Чикен Терияки",
          image_url: "/images/pizza/products/2.jpeg",
          description: "Курица, Лук, Сыр Моцарелла, Томатный соус , Соус Терияки",
          type_id: 1,
          price1: 429,
          price2: 709,
          price3: 879,
        },
        {
          title: "Жюльен",
          image_url: "/images/pizza/products/3.jpeg",
          description: "Грибы, Курица, Лук, Сыр Моцарелла, Соус сметанный с грибами",
          type_id: 1,
          price1: 499,
          price2: 789,
          price3: 939,
        },
        {
          title: "Хот-дог",
          image_url: "/images/pizza/products/4.jpeg",
          description: "Огурцы маринованные, Сыр Моцарелла, Соус Пикант, Лук жареный, Сосиски",
          type_id: 1,
          price1: 499,
          price2: 789,
          price3: 939,
        },
        {
          title: "Домашняя с сосисками",
          image_url: "/images/pizza/products/5.jpeg",
          description: "Свежие томаты, Сыр Моцарелла, Томатный соус , Сосиски",
          type_id: 1,
          price1: 359,
          price2: 629,
          price3: 769,
        },
        {
          title: "Чикен Сладкий Чили",
          image_url: "/images/pizza/products/6.jpeg",
          description:
            "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус , Соус Сладкий Чили",
          type_id: 1,
          price1: 429,
          price2: 709,
          price3: 879,
        },
        {
          title: "4 сезона",
          image_url: "/images/pizza/products/7.jpeg",
          description:
            "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы маринованные, Охотничьи колбаски, Пепперони, Свежие томаты, Соус BBQ, Сыр Моцарелла, Сыр Фета, Томатный соус",
          type_id: 1,
          price1: null,
          price2: 789,
          price3: 939,
        },
        {
          title: "Сырная с ветчиной",
          image_url: "/images/pizza/products/8.jpeg",
          description: "Ветчина, Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 289,
          price2: 549,
          price3: 659,
        },
        {
          title: "Пепперони по-деревенски",
          image_url: "/images/pizza/products/9.jpeg",
          description: "Огурцы маринованные, Пепперони, Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 289,
          price2: 549,
          price3: 659,
        },
        {
          title: "Пепперони",
          image_url: "/images/pizza/products/10.jpeg",
          description: "Пепперони, Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 429,
          price2: 709,
          price3: 879,
        },
        {
          title: "Домино'c",
          image_url: "/images/pizza/products/11.jpeg",
          description:
            "Бекон, Грибы, Курица, Лук, Огурцы маринованные, Охотничьи колбаски, Пепперони, Свежие томаты, Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 639,
          price2: 929,
          price3: 1059,
        },
        {
          title: "Маргарита Гурме",
          image_url: "/images/pizza/products/12.jpeg",
          description: "Свежие томаты, Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 359,
          price2: 629,
          price3: 769,
        },
        {
          title: "Гавайская",
          image_url: "/images/pizza/products/13.jpeg",
          description: "Ананас, Ветчина, Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 359,
          price2: 629,
          price3: 769,
        },
        {
          title: "4 Сыра",
          image_url: "/images/pizza/products/14.jpeg",
          description:
            "Соус Карбонара, Сыр Чеддер (тёртый), Сыр Моцарелла, Сыр Роккфорти, Чесночный соус с сыром Пармезан",
          type_id: 1,
          price1: 639,
          price2: 929,
          price3: 1059,
        },
        {
          title: "Веджи Fit & Fresh",
          image_url: "/images/pizza/products/15.jpeg",
          description: "Грибы, Маслины, Свежие томаты, Сыр Моцарелла, Сыр Фета, Томатный соус",
          type_id: 1,
          price1: 499,
          price2: 789,
          price3: 939,
        },
        {
          title: "Чикен BBQ",
          image_url: "/images/pizza/products/16.jpeg",
          description: "Грибы, Курица, Лук, Соус BBQ, Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 429,
          price2: 709,
          price3: 879,
        },
        {
          title: "Карамельный Ананас",
          image_url: "/images/pizza/products/17.jpeg",
          description: "Ананас, Соус Карамельный, Соус Сырный, Сыр Моцарелла",
          type_id: 1,
          price1: 499,
          price2: 789,
          price3: 939,
        },
        {
          title: "Маргарита",
          image_url: "/images/pizza/products/18.jpeg",
          description: "Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 289,
          price2: 549,
          price3: 659,
        },
        {
          title: "Ветчина и грибы",
          image_url: "/images/pizza/products/19.jpeg",
          description: "Ветчина, Грибы, Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 499,
          price2: 789,
          price3: 939,
        },
        {
          title: "Карбонара",
          image_url: "/images/pizza/products/20.jpeg",
          description: "Бекон, Свежие томаты, Соус Карбонара, Сыр Моцарелла",
          type_id: 1,
          price1: 499,
          price2: 789,
          price3: 939,
        },
        {
          title: "Мясная",
          image_url: "/images/pizza/products/21.jpeg",
          description:
            "Ветчина, Курица, Охотничьи колбаски, Пепперони, Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 709,
          price2: 999,
          price3: 1119,
        },
        {
          title: "Баварская",
          image_url: "/images/pizza/products/22.jpeg",
          description: "Лук, Огурцы маринованные, Охотничьи колбаски, Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 569,
          price2: 859,
          price3: 999,
        },
        {
          title: "3 Мяса",
          image_url: "/images/pizza/products/23.jpeg",
          description: "Бекон, Ветчина, Охотничьи колбаски, Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 569,
          price2: 859,
          price3: 999,
        },
        {
          title: "Микс BBQ",
          image_url: "/images/pizza/products/24.jpeg",
          description: "Бекон, Ветчина, Курица, Лук, Соус BBQ, Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 569,
          price2: 859,
          price3: 999,
        },
        {
          title: "Дабл Пепперони",
          image_url: "/images/pizza/products/25.jpeg",
          description: "Пепперони, Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 569,
          price2: 859,
          price3: 999,
        },
        {
          title: "Диабло",
          image_url: "/images/pizza/products/26.jpeg",
          description:
            "Лук, Пепперони, Перец Халапеньо, Свежие томаты, Сыр Моцарелла, Томатный соус",
          type_id: 1,
          price1: 569,
          price2: 859,
          price3: 999,
        },
        {
          title: "Роял Чизбургер",
          image_url: "/images/pizza/products/27.jpeg",
          description:
            "Бекон, Курица, Лук, Огурцы маринованные, Свежие томаты, Сыр Моцарелла, Сыр Чеддер (ломтиками), Соус Пикант",
          type_id: 1,
          price1: 709,
          price2: 999,
          price3: 1119,
        },
        {
          title: "Пицца Пай Бекон и Халапеньо",
          image_url: "/images/pizza/products/28.jpeg",
          description: "Бекон, Перец Халапеньо, Сыр Моцарелла",
          type_id: 1,
          price1: 429,
        },
        {
          title: "Пицца Пай Ветчина и сыр",
          image_url: "/images/pizza/products/29.jpeg",
          description: "Ветчина, Сыр Моцарелла",
          type_id: 1,
          price1: 429,
        },
        {
          title: "Пицца Пай Двойной сыр",
          image_url: "/images/pizza/products/30.jpeg",
          description: "Сыр Моцарелла",
          type_id: 1,
          price1: 429,
        },
        {
          title: "Сэндвич из печи Чикен BBQ",
          image_url: "/images/pizza/products/31.jpeg",
          description: "Легендарное сочетание курицы, грибов, лука и соуса BBQ!",
          type_id: 2,
          price1: 199,
        },
        {
          title: "Сэндвич из печи мясной",
          image_url: "/images/pizza/products/32.jpeg",
          description:
            "Колбаски Пепперони, нежная ветчина, огурцы, лук и много сыра! Для тех, кто любит сытные перекусы",
          type_id: 2,
          price1: 199,
        },
        {
          title: "Сэндвич из печи Грибной",
          image_url: "/images/pizza/products/33.jpeg",
          description: "Нежное сочетание грибов и сметанного соуса с сыром моцарелла",
          type_id: 2,
          price1: 199,
        },
        {
          title: "Сосиска в тесте",
          image_url: "/images/pizza/products/34.jpeg",
          description:
            "Сочная сосиска в тесте с томатным соусом и сыром моцарелла из печи для вкусного перекуса",
          type_id: 2,
          price1: 99,
        },
        {
          title: "Сэндвич-ролл Жюльен",
          image_url: "/images/pizza/products/35.jpeg",
          description:
            "Лепешка пшеничная, Соус Сметанный с грибами, Сыр Моцарелла, Грибы резаные, Курица",
          type_id: 2,
          price1: 179,
        },
        {
          title: "Сэндвич-ролл Чикен Сладкий чили",
          image_url: "/images/pizza/products/36.jpeg",
          description:
            "Нежное куриное филе, сыр Моцарелла, перчики Халапеньо под соусом Сладкий Чили",
          type_id: 2,
          price1: 179,
        },
        {
          title: "Сэндвич-ролл Куриный",
          image_url: "/images/pizza/products/37.jpeg",
          description:
            "Нежное куриное филе, томаты, сыр Моцарелла под соусом Пикант в хрустящей тортилье.",
          type_id: 2,
          price1: 179,
        },
        {
          title: "Сэндвич-ролл Ветчина и грибы",
          image_url: "/images/pizza/products/38.jpeg",
          description:
            "Умопомрачительное сочетание ветчины и грибов под соусом карбонара в тортилье.",
          type_id: 2,
          price1: 179,
        },
        {
          title: "Фирменный картофель из печи",
          image_url: "/images/pizza/products/39.jpeg",
          description: "Фирменный картофель из печи",
          type_id: 2,
          price1: 189,
          price2: 239,
        },
        {
          title: "Картофель по-деревенcки",
          image_url: "/images/pizza/products/40.jpeg",
          description: "Сочные дольки молодого картофеля со специями, запеченные в печи.",
          type_id: 2,
          price1: 189,
          price2: 239,
        },
        {
          title: "Киккерсы",
          image_url: "/images/pizza/products/41.jpeg",
          description:
            "Кусочки 100% натурального куриного филе в хрустящей панировке! Вкусно! Натурально!",
          type_id: 2,
          price1: 179,
          price2: 279,
        },
        {
          title: "Куриные крылья Терияки",
          image_url: "/images/pizza/products/42.jpeg",
          description: "Аппетитные крылышки в пикантном соусе Терияки",
          type_id: 2,
          price1: 239,
          price2: 349,
        },
        {
          title: "Крылья куриные Сладкий Чили",
          image_url: "/images/pizza/products/43.jpeg",
          description: "Ароматные крылышки с соусом сладкий чили.",
          type_id: 2,
          price1: 239,
          price2: 349,
        },
        {
          title: "Куриные крылья BBQ",
          image_url: "/images/pizza/products/44.jpeg",
          description: "Аппетитные крылышки с изысканным соусом барбекю. Просто объедение!.",
          type_id: 2,
          price1: 239,
          price2: 349,
        },
        {
          title: "Куpиные крылья",
          image_url: "/images/pizza/products/45.jpeg",
          description: "Аппетитные крылышки с насыщенным многогранным вкусом и нотками копчености.",
          type_id: 2,
          price1: 239,
          price2: 349,
        },
        {
          title: "Ароматные хлебцы с чесноком",
          image_url: "/images/pizza/products/46.jpeg",
          description: "Хлебцы покрытые ароматным чесночным маслом с травами",
          type_id: 2,
          price1: 109,
        },
        {
          title: "Ароматные хлебцы с чесноком и сыром",
          image_url: "/images/pizza/products/47.jpeg",
          description:
            "Хлебцы покрытые ароматным чесночным маслом и травами с добавлением сыра Моцарелла",
          type_id: 2,
          price1: 139,
        },
        {
          title: "Пицца-роллы Пепперони",
          image_url: "/images/pizza/products/48.jpeg",
          description: "Пикантные пицца-роллы с сыром и манящими колбасками Пепперони на пышном",
          type_id: 2,
          price1: 219,
        },
        {
          title: "Пицца-роллы Бекон-халапеньо",
          image_url: "/images/pizza/products/49.jpeg",
          description:
            "Для любителей поострее! Пицца-роллы с кусочками бекона, приправленные жгучим",
          type_id: 2,
          price1: 219,
        },
        {
          title: "Завитушки с малиной",
          image_url: "/images/pizza/products/50.jpeg",
          description: "Сладкие и нежные завитушки с малиной, посыпанные сахарной пудрой.",
          type_id: 3,
          price1: 129,
          price2: 219,
        },
        {
          title: "Завитушки с манго-маракуйей",
          image_url: "/images/pizza/products/51.jpeg",
          description: "Сладкие и нежные завитушки с манго-маракуйей, посыпанные сахарной пудрой.",
          type_id: 3,
          price1: 129,
          price2: 219,
        },
        {
          title: "Десерт Шоколадная лава",
          image_url: "/images/pizza/products/52.jpeg",
          description:
            "Нежное хрустящее суфле с начинкой из горячего шоколада, посыпанное тонким слоем сахарной ",
          type_id: 3,
          price1: 229,
        },
        {
          title: "Квас",
          image_url: "/images/pizza/products/53.jpeg",
          description: "Квас Русский Дар 0,5 литра",
          type_id: 4,
          price1: 89,
        },
        {
          title: "Пунш Малиновый",
          image_url: "/images/pizza/products/54.jpeg",
          description: "Горячий пунш 0,3 с малиновым пюре.",
          type_id: 4,
          price1: 129,
        },
        {
          title: "Кофе Латте",
          image_url: "/images/pizza/products/55.jpeg",
          description: "Кофе Латте 300мл",
          type_id: 4,
          price1: 139,
        },
        {
          title: "Кофе Капучино",
          image_url: "/images/pizza/products/56.jpeg",
          description: "Кофе Капучино 300мл",
          type_id: 4,
          price1: 139,
        },
        {
          title: "Кофе Американо",
          image_url: "/images/pizza/products/57.jpeg",
          description: "Кофе Американо 300мл",
          type_id: 4,
          price1: 99,
        },
        {
          title: "Напиток Pepsi",
          image_url: "/images/pizza/products/58.jpeg",
          description: "Напиток Pepsi 0,5 литра.",
          type_id: 4,
          price1: 99,
        },
        {
          title: "Напиток Pepsi Max",
          image_url: "/images/pizza/products/59.jpeg",
          description: "Напиток Pepsi MAX без сахара 0,5 литра",
          type_id: 4,
          price1: 99,
        },
        {
          title: "Напиток 7UP",
          image_url: "/images/pizza/products/60.jpeg",
          description: "Напиток 7UP 0,5 литра.",
          type_id: 4,
          price1: 99,
        },
        {
          title: "Напиток Mirinda",
          image_url: "/images/pizza/products/61.jpeg",
          description: "Напиток Mirinda 0,5 литра.",
          type_id: 4,
          price1: 99,
        },
        {
          title: "Lipton Зеленый чай",
          image_url: "/images/pizza/products/62.jpeg",
          description: "Зеленый чай Lipton 0,5 литра.",
          type_id: 4,
          price1: 99,
        },
        {
          title: "Lipton Лимон",
          image_url: "/images/pizza/products/63.jpeg",
          description: "Чай со вкусом лимона Lipton 0,5 литра.",
          type_id: 4,
          price1: 99,
        },
        {
          title: "Aqua Minerale негазированная",
          image_url: "/images/pizza/products/64.jpeg",
          description: "Питьевая вода Aqua Minerale 0,5 литра без газа.",
          type_id: 4,
          price1: 79,
        },
        {
          title: "Сок Фруктовый Сад Апельcин",
          image_url: "/images/pizza/products/65.jpeg",
          description: "Апельсиновый сок Фруктовый Сад 0,95 литра",
          type_id: 4,
          price1: 189,
        },
        {
          title: "Aqua Minerale газированная",
          image_url: "/images/pizza/products/66.jpeg",
          description: "Питьевая вода Aqua Minerale 0,5 литра с газом.",
          type_id: 4,
          price1: 79,
        },
        {
          title: "Adrenaline Rush",
          image_url: "/images/pizza/products/67.jpeg",
          description: "Энергетический напиток Adrenaline Rush 0,25 литра.",
          type_id: 4,
          price1: 199,
        },
        {
          title: "Пиво BUD безалкогольное",
          image_url: "/images/pizza/products/68.jpeg",
          description: "Пиво BUD безалкогольное 0,45 литра.",
          type_id: 4,
          price1: 139,
        },
        {
          title: "Сок Фруктовый Сад Яблоко",
          image_url: "/images/pizza/products/69.jpeg",
          description: "Яблочный сок Фруктовый Сад 0,95 литра",
          type_id: 4,
          price1: 189,
        },
        {
          title: "Сок Любимый",
          image_url: "/images/pizza/products/70.jpeg",
          description: 'Сок Любимый "Вишневая черешня" 0,3 литра.',
          type_id: 4,
          price1: 99,
        },
        {
          title: "Морс Клюква",
          image_url: "/images/pizza/products/71.jpeg",
          description: "Морс Фруктовый Сад Клюква 0,95 литра.",
          type_id: 4,
          price1: 189,
        },
        {
          title: "Соус Сырный",
          image_url: "/images/pizza/products/72.jpeg",
          description: "Идеально сочетается с картофелем по-деревенски. Вес – 40 грамм.",
          type_id: 5,
          price1: 49,
        },
        {
          title: "Соус Томатный",
          image_url: "/images/pizza/products/73.jpeg",
          description: "Элегантная классика. Вес – 40 грамм.",
          type_id: 5,
          price1: 49,
        },
        {
          title: "Соус Барбекю",
          image_url: "/images/pizza/products/74.jpeg",
          description: "Пикантный соус для самого изысканного любителя. Вес – 40 грамм.",
          type_id: 5,
          price1: 49,
        },
        {
          title: "Соус Карри",
          image_url: "/images/pizza/products/75.jpeg",
          description: "Придаст восточный оттенок любому блюду. Вес – 40 грамм.",
          type_id: 5,
          price1: 49,
        },
      ];

      products = products.map((product) => ({
        ...product,
        product_type: "pizza",
      }));

      for (const product of products) {
        Product.create(product);
      }
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
