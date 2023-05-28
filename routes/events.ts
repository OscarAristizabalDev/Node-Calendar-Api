/*
    Rutas de eventos / eventos
    host + /api/eventos
*/
import { Router } from 'express';
import { check } from 'express-validator'; // check, middleware encarga de validar un campo en particular
import { ActualizarEvento, CrearEvento, EliminarEvento, getEventos } from '../controllers/events';
import { validarJWT } from '../middlewares/validarJwt';

const router = Router();

// Todos tienen que pasar por la validacion del JWT
router.use(validarJWT)


router.get('/', getEventos);
router.post('/create', CrearEvento);
router.put('/update/:id', ActualizarEvento);
router.delete('/delete/:id', EliminarEvento);

// Se exportar todos los router
module.exports = router;