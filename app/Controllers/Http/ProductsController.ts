// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Product from "App/Models/Product";

export default class ProductsController {
  async index({ request }) {
    const params = request.qs();

    const productQuery = Product.query().where("product_type", params.product_type);

    if (params.type) {
      if (params.type === "1") {
        productQuery.andWhere("type_id", "6");
        productQuery.orWhere("type_id", parseInt(params.type));
      } else {
        productQuery.andWhere("type_id", parseInt(params.type));
      }
    }

    const products = await productQuery;

    return products;
  }
}
