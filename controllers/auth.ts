import { Request, Response } from 'express';
const User = require('../models/UserModel')

import { IUser } from '../interfaces/IUser';


export const crearUsuario = async (req: Request, resp: Response) => {

    const { email, name, password }: IUser = req.body;

    try {
        const user = new User(req.body);
        await user.save();

        return resp.status(201).json({
            ok: true,
            email,
            name,
            password
        })
    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            message: 'Por favor comuniquese con el administrador'
        })
    }
}


export const loginUsuario = (req: Request, resp: Response) => {

    const { email, password }: IUser = req.body;

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
