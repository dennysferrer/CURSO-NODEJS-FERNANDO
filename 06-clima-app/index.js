require('dotenv').config();

const { leerInput, inquirerMenu, pausa, listarCiudades } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async () => {

    const busquedas = new Busquedas();
    
    let opt;

    do {
        opt = await inquirerMenu();

        switch(opt){
            case 1:
                // Monstrar mensaje
                const lugar = await leerInput();
                
                // Buscar los lugares
                const ciudades = await busquedas.ciudad( lugar );
                
                // Selecciona el lugar
                const id = await listarCiudades(ciudades);
                if (id === '0') continue;
                const ciudadSel = ciudades.find(ciudad => ciudad.id === id);
                //console.log(ciudadSel);

                //Guardar DB

                busquedas.agregarHistorial(ciudadSel.nombre);

                // Clima

                const ciudadSelClima = await busquedas.clima(ciudadSel.latitud, ciudadSel.longitud);
                //console.log(ciudadSelClima);

                // Mostrar resultados
                console.clear();
                console.log('\n Informacion del lugar ... \n'.green);
                console.log('Ciudad: '.green, ciudadSel.nombre);
                console.log('Lat: '.green, ciudadSel.latitud);
                console.log('Long: '.green, ciudadSel.longitud);
                console.log('Descripcion: '.green, ciudadSelClima.weather[0].description)
                console.log(`Temperatura: ${ciudadSelClima.main.temp - 273.15} ºC`);
                console.log(`Minimo: ${ciudadSelClima.main.temp_min - 273.15} ºC`);
                console.log(`Maximo: ${ciudadSelClima.main.temp_max - 273.15} ºC`);
                break;
            case 2:
                busquedas.guardarDB();

                const { historial } = busquedas.leerDB();

                historial.forEach((ciudad, index) => {
                    const idx = `${index + 1}`.green;
                    console.log(`${idx}. ${ciudad}`);
                });

                break;
        }

        if (opt !== 0){
            await pausa();
        }
        
    } while(opt !== 0)

}

main();