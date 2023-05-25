import { NextFunction, Request, Response  } from "express";
import { validationResult } from "express-validator";

export const validarCampos = (req: Request, resp: Response, next: NextFunction) => {
 
    // manejo de errores
    const errors = validationResult(req); // valida si el request tiene un error, los errores de definen en los middlewares de cada ruta
    // En caso de haber errores
    if (!errors.isEmpty()) {
        return resp.status(400).json({
            ok: false,
            errors: errors.mapped() // mapea los errores
        })
    }
    next();
}

