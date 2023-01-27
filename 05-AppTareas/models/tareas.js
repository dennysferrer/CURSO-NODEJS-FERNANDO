const { stringify } = require('uuid');
const Tarea = require('./tarea');
require('colors');

class Tareas {

    _listado = {};

    constructor(){
        this._listado = {}
    }

    borrarTarea(id = ''){
        if (this._listado[id]){
            delete this._listado[id];
        }
    }

    get listadoArr(){
        const listadoArr = [];
        Object.keys(this._listado).forEach(key => {
            listadoArr.push(this._listado[key]);
        });

        return listadoArr;
    }

    cargarTareasfromArray(tareas = []){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(tareas = []){
        //console.log(this.listadoArr);
        console.log()
        tareas.forEach((tarea, index) => {
            if (tarea.completadoEn){
                console.log(`${index+1}.`.green + ` ${tarea.desc} | ${"Completado".green}`);
            } else {
                console.log(`${index+1}.`.green + ` ${tarea.desc} | ${"Pendiente".red}`);
            }
        });
    }

    listarPendienteCompletada(completadas = true, tareas = []){
        console.log();
        if (completadas){
            tareas.forEach((tarea, index) => {
                if (tarea.completadoEn){
                    console.log(`${index+1}.`.green + ` ${tarea.desc} | ${"Completado".green} ` + `| ${tarea.completadoEn}`.green);
                }
            })
        } else {
            tareas.forEach((tarea, index) => {
                if (!tarea.completadoEn){
                    console.log(`${index+1}.`.green + ` ${tarea.desc} | ${"Pendiente".red}`);
                }
            })
        }
    }

    toggleCompletadas(ids = []){
        ids.forEach( id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                const tarea = this._listado[tarea.id];
                tarea.completadoEn = null;
            } 
        })
    }

}




module.exports = Tareas;