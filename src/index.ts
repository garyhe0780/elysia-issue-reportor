import { Elysia } from "elysia";
import { testRoute } from "./routes/test.route";

const app = new Elysia()
  .use(testRoute)
  .get("/", () => "Hello Elysia", {
    requiredUser: true,
  })
  .listen(6000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
