const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar');


console.clear();
const base = 6;

crearArchivo(base)
    .then(() => console.log(`Tabla del ${base} creada ...`))
    .catch (err => console.log(err))