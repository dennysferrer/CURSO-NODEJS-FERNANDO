const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRolValido = async (role = '') => {
    const existeRole = await Role.findOne({role});
    if (!existeRole){
        throw new Error(`El rol ${role} no está registrado en la base de datos ...`);
    }
}

const emailExiste = async (correo = '') => {
    const existeCorreo = await Usuario.findOne({correo});
    if (existeCorreo){
        throw new Error(`El correo ${correo} ya está registrado ...`)
    }
}

const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Usuario.findById( id );
    if (!existeUsuario){
        throw new Error(`El ID ${id} no existe `);
    }
}







/* 
Usuario.findOne({ correo });
    if (existeEmail){
        return res.status(400).json({
            msg: 'El correo ya está registrado'
        })
    }
 */


module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId
}