import { Request, Response } from 'express';

const Event = require('../models/EventModel')


export const getEventos = async (req: Request, resp: Response) => {
    return resp.status(200).json({
        ok: true,
        message: 'getEventos'
    })
}

export const CrearEvento = async (req: any, resp: Response) => {

    const evento = new Event(req.body);

    try {
        evento.user = req.uid
        const eventoGuardado = await evento.save();
        resp.status(201).json({
            ok: true,
            evento: eventoGuardado
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            message: "Hable con el administrador"
        })
    }
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