const fs = require('fs');


const crearArchivo = async (base, listar) => {
    
    console.log(`***** TABLA DEL ${base} *****`);

    let salida = '';

    for (let i=1; i<=10; i++){
        salida += `${base} * ${i} = ${base*i}\n`;
    }

    if (listar){
        console.log(salida);
    } else {
        console.log('Tabla no listada ...');
    }
    

    let archivo = await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    console.log(`tabla-${base} creada...`);

    return archivo;
    
}

module.exports = {
    crearArchivo
}