const { crearArchivo } = require ('./helpers/multiplicar.js');

const fs = require('fs');
console.clear();

const base = 60;

crearArchivo(base)
    .then(nombreArchivo => {
        console.log(`${nombreArchivo} creado satisfactoriamente ...`);
    })
    .catch(err => console.log(err))



