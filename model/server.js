const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const { dbConection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.exportacionPath = '/export'
        this.middlewares();
        this.routes();
        this.conectarDB();
    }

    listen() {
        this.app.listen(
            this.port, () => {
                console.log('listening on port ' + this.port)
            }
        )
    }

    routes() {
        this.app.use(this.exportacionPath, require('../routes/exportacion'))
    }

    middlewares() {
        this.app.use(cors()); //Indicar el uso de cors
        this.app.use(bodyParser.json()); //Parsear objetos a la base de datos
    }

    async conectarDB() {
        await dbConection();
    }
}

module.exports = { Server };