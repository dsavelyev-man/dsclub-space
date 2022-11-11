/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";
import Application from "@ioc:Adonis/Core/Application";

Route.get("/editor/template/:guid", async ({ request, response }) => {
  const params = request.params();

  const path = Application.resourcesPath("views/templates/" + params.guid + ".edge");

  response.header("Content-Disposition", 'attachment; filename="index.html"');

  response.download(path);
});

Route.get("/editor/*", async ({ view }) => {
  return view.render("editor");
});

Route.get("/editor/", async ({ view }) => {
  return view.render("editor");
});

Route.get("/pizza/*", async ({ view }) => {
  return view.render("pizza", );
});

Route.get("/pizza/", async ({ view }) => {
  return view.render("pizza");
});

Route.get("/chat/*", async ({ view }) => {
  return view.render("chat");
});

Route.get("/chat/", async ({ view }) => {
  return view.render("chat");
});

Route.get("/sandbox/*", async ({ view }) => {
  return view.render("sandbox");
});

Route.get("/sandbox/", async ({ view }) => {
  return view.render("sandbox");
});


Route.get("/*", async ({ view }) => {
  return view.render("index");
});

