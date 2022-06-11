import Route from "@ioc:Adonis/Core/Route";
import fs from "fs";
import Application from "@ioc:Adonis/Core/Application";

Route.group(() => {
  Route.resource("users", "UsersController");

  Route.resource("cities", "CitiesController");

  Route.get("/static/:path", async ({ response, params }) => {
    const filepath = Application.publicPath("images/", params.path);

    if (fs.existsSync(filepath)) {
      const stream = fs.createReadStream(filepath);

      response.stream(stream);
    } else {
      response.status(404);
    }
  });
}).prefix("ajax");
