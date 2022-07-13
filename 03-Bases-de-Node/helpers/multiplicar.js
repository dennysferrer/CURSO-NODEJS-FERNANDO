
const fs = require('fs');

const crearArchivo = async (base) => {
    
    console.log(`***** TABLA DEL ${base} *****`);

    let salida = '';

    for (let i=1; i<=10; i++){
        salida += `${base} * ${i} = ${base*i}\n`;
    }

    console.log(salida);

    let archivo = await fs.writeFileSync(`tabla-${base}.txt`, salida);
    console.log(`tabla-${base} creada...`);

    return archivo;
    
}

module.exports = {
    crearArchivo
}