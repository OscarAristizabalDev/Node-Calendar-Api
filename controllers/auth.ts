import { Request, Response } from 'express';
const bcrypt = require('bcryptjs');

const User = require('../models/UserModel')
import { IUser } from '../interfaces/IUser';
import { generarJWT } from '../helpers/jwt';

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

        // Genera JWT
        const token = await generarJWT(user.id, user.name);

        return resp.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            message: 'Por favor comuniquese con el administrador'
        })
    }
}


export const loginUsuario = async (req: Request, resp: Response) => {

    const { email, password }: IUser = req.body;

    try {

        const user = await User.findOne({ email });
        // si no existe el usuario
        if (!user) {
            return resp.status(400).json({
                ok: false,
                message: `El usuario o password no son correctos`
            })
        }

        // confirmar los passwords
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return resp.status(400).json({
                ok: false,
                message: `Password incorrecto`
            })
        }

        // Generar JWT
        const token = await generarJWT(user.id, user.name);

        return resp.json({
            ok: true,
            message: 'Login',
            uid: user.id,
            name: user.name,
            token
        })

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            message: 'Por favor comuniquese con el administrador'
        })
    }
}

/**
 * Permite crear un nuevo token
 * @param req 
 * @param resp 
 */
export const revalidarToken = async (req: any, resp: Response) => {

    const { uid, name } = req;

    // Se genera un nuevo JWT
    const token = await generarJWT(uid, name);


    resp.json({
        name,
        ok: true,
        token,
        uid
    })
}
