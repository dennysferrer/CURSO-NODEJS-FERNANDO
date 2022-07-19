require('colors');
const inquirer = require('inquirer');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tareas'
            },
            {
                value: '3',
                name: '3. Listar Tareas Completadas'
            },
            {
                value: '4',
                name: '4. Listar Tareas Pendientes'
            },
            {
                value: '5',
                name: '5. Completar Tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar Tarea'
            },
            {
                value: '0', 
                name: '0. Salir'
            },
        ]
    }
];

const pregunta2 = [
    {
        type: 'input',
        name: 'pausa',
        message: `Presiona ${'ENTER'.bgGreen} para continuar...`
    }
]

const inquirerMenu = async() => {
    //console.clear();
    console.log("========================".green);
    console.log("Seleccione una Opción".white);
    console.log("========================\n".green);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;

}

const pausa = async() => {
    await inquirer.prompt(pregunta2);
}


module.exports = {
    inquirerMenu,
    pausa
}