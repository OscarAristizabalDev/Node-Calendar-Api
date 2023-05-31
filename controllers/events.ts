import { Request, Response } from 'express';


export const getEventos = async (req: Request, resp: Response) => {
    return resp.status(200).json({
        ok: true,
        message: 'getEventos'
    })
}

export const CrearEvento = async (req: Request, resp: Response) => {

    console.log(req.body)

    return resp.status(201).json({
        ok: true,
        message: 'CrearEvento'
    })
}

export const ActualizarEvento = async (req: Request, resp: Response) => {
    return resp.status(200).json({
        ok: true,
        message: 'ActualizarEvento'
    })
}

export const EliminarEvento = async (req: Request, resp: Response) => {
    return resp.status(200).json({
        ok: true,
        message: 'EliminarEvento'
    })
}