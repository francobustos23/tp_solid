import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express, { Application } from 'express';
import { envsSQL } from './environments/environments';
//Routes
import clientRoutes from './routes/client.routes';
import vehicleRoutes from './routes/vehicle.routes';

export class Server {
    private app: Application;
    private port: number; 

    constructor() {
        this.app = express();
        this.port = envsSQL.PORT;

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
        this.app.use('/api', vehicleRoutes);
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`server is running on port: http://localhost:${this.port}`)
        })
    }   
}