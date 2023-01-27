const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async() => {

    const busquedas = new Busquedas();
    let opt;

    do {
        opt = await inquirerMenu();
        //console.log({opt});

        switch (opt) {
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                
                //Buscar los lugares
                await busquedas.ciudad(lugar);
                //Seleccionar el lugar

                //Clima

                //Mostrar resultados
                console.log('\n Informacion de la ciuidad\n'.green);
                console.log('Ciudad: ', );
                console.log('Latitud: ', );
                console.log('Longitud: ', );
                console.log('Temperatura: ', );
                console.log('Minimo: ', );
                console.log('Maximo: \n', );

                break;

        }

        if (opt !== 0){
            await pausa();
        }

    } while (opt !== 0)
    
}

main();

