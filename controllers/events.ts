import { Request, Response } from 'express';

const Event = require('../models/EventModel')


export const getEventos = async (req: Request, resp: Response) => {

    try {
        // permite traer los eventos junto con la información del usuario (se obtiene solo el name)
        const eventos = await Event.find().populate('user', 'name');

        return resp.status(200).json({
            ok: true,
            eventos
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            message: "Hable con el administrador"
        })
    }

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

export const ActualizarEvento = async (req: any, resp: Response) => {

    // Se obtiene el uid del usuario
    const uid = req.uid;
    // Se toma el id que viene por la url
    const eventoId = req.params.id;
    console.log(eventoId)
    try {

        // Se busca el evento en la base de datos
        const evento = await Event.findById(eventoId);
        if (!evento) {
            return resp.status(404).json({
                ok: false,
                message: 'El evento no existe por ese id'
            })
        }

        // Si el usuario del evento es diferente al autenticado
        if (evento.user.toString() !== uid) {
            return resp.status(401).json({
                ok: false,
                message: 'No tiene privilegios de editar este evento'
            })
        }

        const nuevoEvento = {
            ...req.body, // se toman todos los valores del body
            user: uid
        }

        // permite buscar y actualizar el evento en BD, new: true indica que se retorne el evento actualizado, no el anterior
        const eventoActualizado = await Event.findByIdAndUpdate(eventoId, nuevoEvento, { new: true });

        return resp.status(200).json({
            ok: true,
            evento: eventoActualizado
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            message: "Hable con el administrador"
        })
    }
}

export const EliminarEvento = async (req: Request, resp: Response) => {
    return resp.status(200).json({
        ok: true,
        message: 'EliminarEvento'
    })
}