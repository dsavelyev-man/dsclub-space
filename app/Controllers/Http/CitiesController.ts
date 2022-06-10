// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import City from "App/Models/City";

export default class CitiesController {
    index() {
        return City.all()
    }
}
