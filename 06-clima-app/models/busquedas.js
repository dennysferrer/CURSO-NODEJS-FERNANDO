const axios = require('axios');

class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'San Jose', 'Bogota', 'Caracas', 'Miami']

    constructor(){
        //TODO: leer DB si existe
    }

    async ciudad(lugar = ''){
        //peticion http
        //console.log('ciudad', lugar);
        try {
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Madrid.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1IjoiZGVubnlzZmVycmVyIiwiYSI6ImNsYTh6Yzh3OTA2NG0zcHF1Y3k5NjdnZnEifQ.UaiD48uumztY0SXSv4f-3g');
            console.log(resp.data);

            return []; // retornar arreglo con todas las ciudades que coincidas con el lugar


        } catch (error) {
            console.log(error);
            return []
        }
        

        
    }
}





module.exports = Busquedas;

