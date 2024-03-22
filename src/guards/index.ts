import { Elysia, error } from "elysia";

export const authGuard = new Elysia({
  name: "authGuard",
})
  .macro(({ onBeforeHandle }) => ({
    requiredUser(value: boolean) {
      onBeforeHandle(async () => {
        if (value) {
          return error(401, {
            code: "S000002",
            message: "Unauthorized",
          });
        }
      });
    },
  }))
  .resolve({as: "global"}, ({}) => ({
    async user() {
      return null;
    },
  }));
