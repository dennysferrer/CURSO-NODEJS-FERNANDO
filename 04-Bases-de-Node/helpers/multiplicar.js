const { rejects } = require('assert');
const fs = require('fs');

const crearArchivo = (base) => {
    const promesaCrearArchivo = new Promise((resolve,rejects) => {
        console.clear()
        console.log("======================");
        console.log(`TABLA DEL ${base}`);
        console.log("======================");
    })
    

    let salida = '';
    for (let i=0; i<=10; i++){
        salida += `${base} * ${i} = ${base*i}\n`;
    }
    console.log(salida);
    fs.writeFileSync(`tabla-${base}.txt`, salida);

}

module.exports = {
    crearArchivo
}