const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');


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

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});
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