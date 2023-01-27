require('colors');
const { rejects } = require('node:assert');
const { resolve } = require('node:path');
const readline = require('node:readline');


const mostrarMenu = () => {

    return new Promise((resolve, rejects) => {
        console.clear();
        console.log('=========================='.yellow);
        console.log(' Seleccione una opcion '.blue);
        console.log('==========================\n'.red);

        console.log(`${'1'.green}. Crear tareas`);
        console.log(`${'2'.green}. Listar tareas`);
        console.log(`${'3'.green}. Listar tareas completadas`);
        console.log(`${'4'.green}. Listar tareas pendientes`);
        console.log(`${'5'.green}. Completar tarea(s)`);
        console.log(`${'6'.green}. Borrar tarea`);
        console.log(`${'0'.green}. Salir\n`);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Seleccione una opcion: ', (opt) => {
            rl.close();
            resolve(opt);
        });

    });
}

const pausa = () => {

    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        rl.question(`\n Presione ${'ENTER'.green} para continuar \n`, (opt) => {
            rl.close();
            resolve()
        })
    });
}

module.exports = {
    mostrarMenu,
    pausa
}
