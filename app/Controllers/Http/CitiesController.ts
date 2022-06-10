// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import City from "App/Models/City";

export default class CitiesController {
  async index() {
    let cities = await City.query().orderBy("title", "asc");

    cities = cities.map((city) => city.serialize());

    return cities;
  }
}
