/*
    Rutas de usuario / auth
    host + /api/auth
*/
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, resp: Response) => {
    resp.json({
        ok: true
    })
});

// Se exportar todos los router
module.exports = router;