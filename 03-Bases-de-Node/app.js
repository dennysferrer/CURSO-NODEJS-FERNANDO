const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs.js');

console.log('base: yargs', argv.base);

crearArchivo(argv.base, argv.listar)
    .then(() => console.log(`Tabla del ${argv.base} creada ...`))
    .catch (err => console.log(err))



