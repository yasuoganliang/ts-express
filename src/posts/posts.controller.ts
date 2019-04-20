import * as express from "express";
import Post from "./posts.interface";

export class PostsController {
	public path = `/path`;
	public router = express.Router();

	private posts: Post[] = [
		{
			author: "yujinsheng",
			content: "typescript",
			title: "hey"
		}
	];

	constructor() {
		this.initializeRouters();
	}

	public initializeRouters() {
		this.router.get(this.path, this.getAllPosts);
		this.router.post(this.path, this.createAPost);
	}

	getAllPosts = (req: express.Request, res: express.Reponse) => {
		res.send(this.posts);
	}

	createAPost = (req: express.Request, res: express.Reponse) => {
		const post: Post = req.body;
		this.posts.push(post);
		res.send(this.posts);
	}
}

export default PostsController;
