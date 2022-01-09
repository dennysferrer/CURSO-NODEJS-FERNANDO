const fs = require('fs');

const crearArchivo = (base, listar) => {
    const promesaCrearArchivo = new Promise((resolve,reject) => {
        console.clear()
        console.log("======================");
        console.log(`   TABLA DEL ${base}`);
        console.log("======================");
        let salida = '';
        for (let i=0; i<=10; i++){
            salida += `${base} * ${i} = ${base*i}\n`;
        }
        if (salida){
            if (listar){
                console.log(salida);
                fs.writeFileSync(`tabla-${base}.txt`, salida);
                resolve(`tabla-${base}`);
            } else {
                fs.writeFileSync(`tabla-${base}.txt`, salida);
                resolve(`tabla-${base}`);
            }
        } else {
            reject('El archivo no existe ...');
        }
        
    })
    return promesaCrearArchivo;

}

module.exports = {
    crearArchivo
}