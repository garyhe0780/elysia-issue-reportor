import { Elysia } from "elysia";
import { testRoute } from "./routes/test.route";
import { aRoute } from "./routes/a.route";

const app = new Elysia()
  .use(testRoute)
  .use(aRoute)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
