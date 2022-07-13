const { crearArchivo } = require ('./helpers/multiplicar.js');
const { argv } = require('./config/yargs');

const fs = require('fs');
console.clear();

const base = argv.b;
const listar = argv.l;
const hasta = argv.h;

crearArchivo(base, listar, hasta)
    .then(nombreArchivo => {
        console.log(`${nombreArchivo} creado satisfactoriamente ...`);
    })
    .catch(err => console.log(err))

