const { guardarDB, leerDB } = require('./helpers/guardarArchivos');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');

require('colors');
console.clear();

const main = async () => {

    let opt = '';

    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB){
        tareas.cargarTareasfromArray(tareasDB);        
    }

    do {

        opt = await inquirerMenu();
        
        switch(opt){
            case '1':
                //crear tarea
                const desc = await leerInput('Descripcion: ');
                //console.log(desc);
                tareas.crearTarea(desc);
            break;
            case '2':
                //listar tarea
                //console.log(tareas.listadoArr);
                tareas.listadoCompleto(tareasDB);
                
            break;
            case '3':
                tareas.listarPendienteCompletada(true, tareasDB);
            break;
            case '4':
                tareas.listarPendienteCompletada(false, tareasDB);
            break;
            case '5':
                const ids = await mostrarListadoCheckList(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0'){    
                    const ok = await confirmar('Estas Seguro?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada ...');
                    }
                }
                
            break;
            case '0':
                
            break;
        }


        guardarDB(tareas.listadoArr);

        await pausa();

    } while(opt !== '0');

}


main()
