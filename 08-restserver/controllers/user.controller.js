const { response, request } = require('express');


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

const usuariosPost = (req, res = response) => {

    const body = req.body;
    console.log(body);
    res.json({
        msg: 'post API - Controlador'
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