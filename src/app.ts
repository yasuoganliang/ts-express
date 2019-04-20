import * as express from "express";

export class App {
	public app: express.Application;
	public port: number;
	public host: string;

	constructor(controllers: any[], port: number, host: string) {
		this.app = express();
		this.port = port;
		this.host = host;

		this.initializeMiddlewares();
		this.initializeControllers(controllers);
	}

	private initializeMiddlewares() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}

	private initializeControllers(controllers: any[]) {
		controllers.forEach(controller => {
			this.app.use(controller.router);
		});
	}

	public initServer() {
		this.app.listen(this.port, this.host, () => {
			console.log(`server running at http://${ this.host }:${ this.port }`);
		})
	}
}

export default App;
