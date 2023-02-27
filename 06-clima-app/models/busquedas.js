const fs = require('fs');

const axios = require('axios');

class Busquedas {
    historial = [];
    dbPath = './db/database.json';

    constructor(){
        this.leerDB();
    }

    async ciudad(lugar = ''){

        try {

            //peticion http
            const instace = {
                baseURL : `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params : {
                    'access_token' : `${process.env.MAPBOX_KEY}`,
                    'limit' : 5,
                    'language' : 'es'    
                }
            }

            const peticion = axios.create(instace);
            const resp = await peticion.get();

            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                longitud: lugar.center[0],
                latitud: lugar.center[1]
            }));

        } catch (error) {
           console.log('Error en la aplicacion');
           return [];
        }
       
    }

    async clima(lat, long) {
        const instace = {
            baseURL : `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=be4ae56ddfbc6f8f898242f8da3a7981`,
            params : {
                'appid' : `${process.env.OPENWEATHER_KEY}` 
            }
        }

        const peticionClima = axios.create(instace);
        const respClima = await peticionClima.get();

        return (respClima.data);
    }

    agregarHistorial(lugar = '') {
        //Prevenir duplicidad

        if (this.historial.includes(lugar.toLowerCase())){
            return;
        }
        // Guardar historial
        this.historial.unshift(lugar);
    }

    guardarDB(){

        const payload = {
            historial: this.historial
        };

        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    leerDB(){
        if (!fs.existsSync(this.dbPath)){
            return null;
        }

        const info = fs.readFileSync(this.dbPath, 'utf-8');
        const data = JSON.parse(info);

        return data;
    }

}

module.exports = Busquedas;