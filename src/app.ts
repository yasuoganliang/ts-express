import * as express from "express";

const app = express();
const router = express.Router();

function loggerMiddleware(req: express.Request, res: express.Reponse, next) {
	console.log(`${ req.method } ${ req.path }`);
	next();
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

app.post("/", (req, res, next) => {
	res.send(req.body);
});

app.use("/api", router);

app.get("/hello", (req, res) => {
	res.send("hello world");
});

const port: number = 9527;
const host: string = `0.0.0.0`;

app.listen(port, host);
