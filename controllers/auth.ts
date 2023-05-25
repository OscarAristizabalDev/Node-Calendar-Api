import { Request, RequestHandler, Response } from 'express';
import { User } from '../models/user';


export const crearUsuario = (req: Request, resp: Response) => {

    const { email, name, password } : User = req.body;

    if(name.length < 5){
        return resp.status(400).json({
            ok: false,
            message: 'El nombre debe ser de 5 letras'
        })
    }

    return resp.json({
        ok: true,
        email,
        name,
        password
    })
}


export const loginUsuario = (req: Request, resp: Response) => {

    const { email, password } : User = req.body;

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
