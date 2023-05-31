/*
    Rutas de eventos / eventos
    host + /api/eventos
*/
import { Router } from 'express';
import { check } from 'express-validator'; // check, middleware encarga de validar un campo en particular

import { ActualizarEvento, CrearEvento, EliminarEvento, getEventos } from '../controllers/events';
import { validarJWT } from '../middlewares/validarJwt';
import { validarCampos } from '../middlewares/validarCampos';
import { isDate } from '../helpers/isDate';

const router = Router();

// Todos tienen que pasar por la validacion del JWT
router.use(validarJWT)


router.get('/', getEventos);
router.post(
    '/create',
    [
        check('title', 'EL título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    CrearEvento);
router.put('/update/:id', ActualizarEvento);
router.delete('/delete/:id', EliminarEvento);

// Se exportar todos los router
module.exports = router;