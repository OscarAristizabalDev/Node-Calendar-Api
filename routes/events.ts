/*
    Rutas de eventos / eventos
    host + /api/eventos
*/
import { Router } from 'express';
import { check } from 'express-validator'; // check, middleware encarga de validar un campo en particular
import { ActualizarEvento, CrearEvento, EliminarEvento, getEventos } from '../controllers/events';
const router = Router();

router.get('/', getEventos);
router.post('/create', CrearEvento);
router.put('/update', ActualizarEvento);
router.delete('/delete', EliminarEvento);

// Se exportar todos los router
module.exports = router;