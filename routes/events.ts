/*
    Rutas de eventos / eventos
    host + /api/eventos
*/
import { Router } from 'express';
import { check } from 'express-validator'; // check, middleware encarga de validar un campo en particular
import { ActualizarEvento, CrearEvento, EliminarEvento, getEventos } from '../controllers/events';
import { validarJWT } from '../middlewares/validarJwt';

const router = Router();

router.get('/', validarJWT, getEventos);
router.post('/create', validarJWT, CrearEvento);
router.put('/update', validarJWT, ActualizarEvento);
router.delete('/delete', validarJWT, EliminarEvento);

// Se exportar todos los router
module.exports = router;