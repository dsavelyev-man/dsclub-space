import Route from "@ioc:Adonis/Core/Route";
import { writeFile } from "fs/promises";
import Application from "@ioc:Adonis/Core/Application";
import { v4 as uuidv4 } from "uuid";

Route.group(() => {
  Route.resource("users", "UsersController");
  Route.resource("cities", "CitiesController");
  Route.resource("products", "ProductsController");

  Route.post("editor", async ({ request, response, view }) => {
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
