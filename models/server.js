import express, { json } from 'express';
import 'dotenv/config'
import dbConnection from '../database/config.js';
import routesCuenta from '../routes/cuentaRoutes.js'

class Server {
    constructor() {
        this.app = express();
        this.listen()
        this.dbConnection()
        this.pathCuenta = '/api/Cuenta'
        this.route()
    }

    async dbConnection() {
        await dbConnection()
    }

    route() {
        this.app.use(json())
        this.app.use(this.pathCuenta, routesCuenta)
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port: ${process.env.PORT}`);
        });
    }
}

export default Server // Para exportar la clase server