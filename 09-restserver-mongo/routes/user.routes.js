
const { Router } = require('express');
const { check } = require('express-validator')
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/user.controller');
const { esRolValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();


router.get('/', usuariosGet);

router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRolValido),
    validarCampos
], usuariosPut);

router.post('/',[
    check('correo', 'El correo no es correcto').isEmail().custom(emailExiste),
    check('password','El password es obligatorio y mayor a 6 letras').isLength({ min: 6 }),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    //check('rol', 'No es un rol valido').isIn(['ADMIN_ROL', 'USER_ROL']),
    check('rol').custom(esRolValido),
    validarCampos
], usuariosPost);

router.delete('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], usuariosDelete);




module.exports = router;