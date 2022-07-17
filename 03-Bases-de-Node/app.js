const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs.js');
const colors = require('colors');

console.log('base: yargs', argv.base, argv.hasta);

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(() => console.log(`Tabla del ${argv.base} creada ...`.blue))
    .catch (err => console.log(err))



