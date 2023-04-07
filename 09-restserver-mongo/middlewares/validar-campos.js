const { validationResult } = require('express-validator');


//Se valida que el formato del correo sea correcto segun el middleware puesto en la ruta post
const validarCampos = ( req, res, next) => {

    const errores = validationResult(req);
    if (!errores.isEmpty()){
        return res.status(400).json(errores);
    }

    next();

}



module.exports = {
    validarCampos
}

