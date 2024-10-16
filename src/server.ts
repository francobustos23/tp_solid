import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import express, { Application } from 'express'

export class Server {
    private app: Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = 3000;
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`server is running on port: http://localhost:${this.port}`)
        })
    }   
}