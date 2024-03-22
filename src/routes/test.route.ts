import { Elysia } from "elysia";
import { authGuard } from "../guards";

export const testRoute = new Elysia({
  prefix: "/test",
  name: "testRoute",
})
  .use(authGuard)
  .guard({
    requiredUser: true,
  })
  .get("", () => "Hello Elysia test");
