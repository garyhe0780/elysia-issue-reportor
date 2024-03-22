import Elysia from "elysia";
import { authGuard } from "../guards/inde";

export const aRoute = new Elysia({
	prefix: "/a",
	name: "aRoute",
})
	.use(authGuard)
	.get("", () => "Hello Elysia a")
	.group("/b", {
		requiredUser: true,
	}, (app) => app.get("c", () => {
		return 'this should require user auth';
	}));