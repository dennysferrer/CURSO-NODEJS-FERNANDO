const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base, listar, hasta) => {
    
    console.log(`***** TABLA DEL ${base} *****`.underline.green);

    let salida = '';
    let salida2 = '';

    for (let i=1; i<=hasta; i++){
        salida += `${base} * ${i} = ${base*i}\n`;
        salida2 += `${colors.yellow(base)} * ${colors.blue(i)} = ${colors.red(base*i)}\n`;
    }

    if (listar){
        console.log(salida2);
    } else {
        console.log('Tabla no listada ...');
    }
    

    let archivo = await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    console.log(`tabla-${base} creada...`.red);

    return archivo;
    
}

module.exports = {
    crearArchivo
}