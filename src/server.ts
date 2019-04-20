import { App } from "./app";
import PostsController from "./posts/posts.controller";

const port: number = 9527;
const host: string = `0.0.0.0`
const app = new App(
	[
		new	PostsController()
	],
	port,
	host
);

app.initServer()
