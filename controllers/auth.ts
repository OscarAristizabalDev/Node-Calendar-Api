import { Request, Response } from 'express';

import { User } from '../models/user';


export const crearUsuario = (req: Request, resp: Response) => {

    const { email, name, password }: User = req.body;

    return resp.status(201).json({
        ok: true,
        email,
        name,
        password
    })
}


export const loginUsuario = (req: Request, resp: Response) => {

    const { email, password }: User = req.body;

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
