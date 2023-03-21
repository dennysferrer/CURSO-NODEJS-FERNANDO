
const { Router } = require('express');
const { check } = require('express-validator')
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/user.controller');

const router = Router();


router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/',[check('correo', 'El correo no es correcto').isEmail()], usuariosPost);

router.delete('/', usuariosDelete);




module.exports = router;