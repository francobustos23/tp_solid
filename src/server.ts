import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import express, { Application } from 'express'
import clientRoutes from './routes/client.routes'

export class Server {
    private app: Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = 3000;

        this.middleweares();
        this.routes();
    }

    middleweares() {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api', clientRoutes);
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`server is running on port: http://localhost:${this.port}`)
        })
    }   
}