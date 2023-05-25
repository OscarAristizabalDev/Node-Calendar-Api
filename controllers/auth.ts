import { Request, RequestHandler, Response } from 'express';
import { validationResult } from 'express-validator';

import { User } from '../models/user';


export const crearUsuario = (req: Request, resp: Response) => {

    const { email, name, password }: User = req.body;

    // manejo de errores
    const errors = validationResult(req); // valida si el request tiene un error, los errores de definen en los middlewares de cada ruta
    // En caso de haber errores
    if (!errors.isEmpty()) {
        return resp.status(400).json({
            ok: false,
            errors: errors.mapped() // mapea los errores
        })
    }

    return resp.status(201).json({
        ok: true,
        email,
        name,
        password
    })
}


export const loginUsuario = (req: Request, resp: Response) => {

    const { email, password }: User = req.body;

    // manejo de errores
    const errors = validationResult(req); // valida si el request tiene un error, los errores de definen en los middlewares de cada ruta
    // En caso de haber errores
    if (!errors.isEmpty()) {
        return resp.status(400).json({
            ok: false,
            errors: errors.mapped() // mapea los errores
        })
    }

    return resp.json({
        ok: true,
        message: 'Login',
        email,
        password
    })
}

export const revalidarToken = (req: Request, resp: Response) => {
    resp.json({
        ok: true,
        message: 'Renew token'
    })
}
