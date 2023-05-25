/*
    Rutas de usuario / auth
    host + /api/auth
*/
import { Router } from 'express';
import { check } from 'express-validator'; // check, middleware encarga de validar un campo en particular
const router = Router();

import { crearUsuario, loginUsuario, revalidarToken } from '../controllers/auth'

router.post(
    '/create',
    [ // middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(), //  check, middleware encarga de validar un campo en particular
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 })
    ],
    crearUsuario);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }) 
    ], 
    loginUsuario);

router.get('/renew', revalidarToken);

// Se exportar todos los router
module.exports = router;