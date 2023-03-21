const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config');
require('dotenv').config();


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Conectar a la base de datos
        this.conectionDB();

        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();
    }

    async conectionDB(){
        await dbConection();
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //Parseo y lectura de body

        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
        
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user.routes'))
    } 

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server listening in port ${this.port}`);
        })
    }

}


module.exports = Server;