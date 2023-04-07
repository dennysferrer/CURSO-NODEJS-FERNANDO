//const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { validarCampos } = require('../middlewares/validar-campos');



const usuariosGet = async (req = request, res = response) => {

    const { limite=5, desde=0 } = req.query;

    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments({estado: true}),
        Usuario.find({estado: true})
            .skip(desde)
            .limit(limite)
    ]);

    res.json({
        msg: 'get API - Controlador',
        total,
        usuarios
    });
};

const usuariosPut = async (req, res = response) => {

    const { id } = req.params;

    const { _id, password, google, correo, ...resto } = req.body;

    //console.log(resto);

    //Validar contra base de datos
    if ( password ){
        //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync(10);
        resto.password = bcryptjs.hashSync(password, salt);
    }

    
    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'put API - Controlador',
        usuario
    });
};

const usuariosPost = async (req, res = response) => {

    //Se valida que el formato del correo sea correcto segun el middleware puesto en la ruta post
    //validarCampos(req);

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    //Verificar si el correo existe
    

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

const usuariosDelete = async (req, res = response) => {

    const { id } = req.params;

    //Borrar usuario fisicamente
    //const usuario = await Usuario.findByIdAndDelete(id);

    const usuario = await Usuario.findByIdAndUpdate(id, {estado: false})

    res.json({
        msg: 'User Delete',
        usuario
    });
};


module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}