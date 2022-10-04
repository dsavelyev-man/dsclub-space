import Route from "@ioc:Adonis/Core/Route";
import { writeFile } from "fs/promises";
import Application from "@ioc:Adonis/Core/Application";
import { v4 as uuidv4 } from "uuid";

Route.group(() => {
  Route.group(() => {
    Route.resource("/friends", "FriendsController");
    Route.resource("/chats", "ChatsController")
    Route.resource("/messages", "MessagesController");

  }).middleware("auth")

  Route.get("/auth", "UsersController.auth")
  Route.post("/registration", "UsersController.registration")
  Route.post("/login", "UsersController.login")

  Route.resource("cities", "CitiesController");
  Route.resource("products", "ProductsController");

  Route.post("editor", async ({ request, view }) => {
    const content = request.input("html");

    const html = await view.render("editorTemplate", {
      content,
    });

    const name = uuidv4();
    const path = Application.resourcesPath("views/templates/" + name + ".edge");

    await writeFile(path, html);

    return {
      to: "/editor/template/" + name,
    };
  });
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
