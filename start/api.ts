import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.resource("users", "UsersController")

    Route.resource("cities", "CitiesController")
}).prefix("ajax")