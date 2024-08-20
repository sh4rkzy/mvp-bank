import Koa from "koa";
import Router from "koa-router";
import { graphqlHTTP } from "koa-graphql";
import { createServer } from "node:http";
import { schema } from "./schema/schema";
import setupApp from "./infrastructure/config/app";
import { Database } from "./infrastructure/database/mongodb";

const app = new Koa();
const router = new Router();
const database = new Database();

router.all(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	}),
);

setupApp(app);
app.use(router.routes()).use(router.allowedMethods());

(async () => {
	try {
		await database.connectTest();
		const server = createServer(app.callback());
		const port = process.env.PORT || 3000;
		server.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	} catch (error) {
		console.error("Failed to start the server:", error);
	}
})();
