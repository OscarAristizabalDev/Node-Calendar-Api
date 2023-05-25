/*
    Rutas de usuario / auth
    host + /api/auth
*/
import { Router } from 'express';
const router = Router();

import { crearUsuario, loginUsuario, revalidarToken } from '../controllers/auth' 

router.post('/create', crearUsuario);

router.post('/', loginUsuario);

router.get('/renew', revalidarToken);

// Se exportar todos los router
module.exports = router;