import { Request, RequestHandler, Response } from 'express';


export const crearUsuario = (req: Request, resp: Response) => {
    return resp.json({
        ok: true
    })
}


export const loginUsuario = (req: Request, resp: Response) => {
    return resp.json({
        ok: true,
        message: 'Login'
    })
}

export const revalidarToken = (req: Request, resp: Response) => {
    resp.json({
        ok: true,
        message: 'Renew token'
    })
}
