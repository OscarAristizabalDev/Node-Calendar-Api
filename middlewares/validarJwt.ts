import { NextFunction, Request, Response } from "express";
const jwt = require('jsonwebtoken');

export const validarJWT = (req: any, resp: Response, next: NextFunction) => {

    // Se acceder al header x-token enviado en las cabeceras de la petición
    const token = req.header('x-token');

    if (!token) {
        return resp.status(401).json({
            ok: false,
            message: 'No hay token en la petición'
        })
    }

    try {
        
        // Función que permite validar el token
        // Retorna el uid y name del usuario
        const { uid, name } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        // se agregan estos dos valores al request
        req.uid = uid;
        req.name = name;

    } catch (error) {
        console.log(error)
        return resp.status(401).json({
            ok: false,
            message: 'Token no válido'
        })
    }

    next();

}