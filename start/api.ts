import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.resource("users", "UsersController");

  Route.resource("cities", "CitiesController");

  // Route.get("/static/*/*", async ({ request, response, params }) => {
  //   console.log(request);
  //   // const filepath = Application.publicPath("images/", params.path);
  //   //
  //   // if (fs.existsSync(filepath)) {
  //   //   const stream = fs.createReadStream(filepath);
  //   //
  //   //   response.stream(stream);
  //   // } else {
  //   //   response.status(404);
  //   // }
  // });
}).prefix("ajax");
