import { Request, Response } from 'express';
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel')

import { IUser } from '../interfaces/IUser';


export const crearUsuario = async (req: Request, resp: Response) => {

    const { email, password }: IUser = req.body;

    try {

        let user = await User.findOne({ email });
        // si existe el usuario
        if (user) {
            return resp.status(400).json({
                ok: false,
                message: `El usuario ya existe con el correo ${email}`
            })
        }

        user = new User(req.body);
        // Encriptar contrasenia
        const salt = bcrypt.genSaltSync();        
        user.password = bcrypt.hashSync(password, salt);
        
        await user.save();

        return resp.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
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
