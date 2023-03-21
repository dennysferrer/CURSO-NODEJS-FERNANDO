const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { validationResult } = require('express-validator');


const usuariosGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'get API - Controlador',
        query
    });
};

const usuariosPut = (req, res = response) => {

    const id = req.params.id;
    res.json({
        msg: 'put API - Controlador',
        id
    });
};

const usuariosPost = async (req, res = response) => {

    //Se valida que el formato del correo sea correcto segun el middleware puesto en la ruta post
    const errores = validationResult(req);
    if (!errores.isEmpty()){
        return res.status(400).json(errores);
    }

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    //Verificar si el correo existe
    const existeEmail = Usuario.findOne({ correo });
    if (existeEmail){
        return res.status(400).json({
            msg: 'El correo ya está registrado'
        })
    }

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar en DB
    await usuario.save();

    //console.log(body);
    res.json({
        msg: 'post API - Controlador',
        usuario
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - Controlador'
    });
};


module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}