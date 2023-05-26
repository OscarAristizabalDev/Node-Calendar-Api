const jwt = require('jsonwebtoken');

/**
 * Metodo permite generar el Json Web Token
 * @param uid 
 * @param name 
 * @returns una promesa, reject en caso de error, y resolve con el token
 */
export const generarJWT = (uid: number, name: string) => {

    return new Promise((resolve, reject) => {
        const payload = { uid, name };

        // jwt.io
        // Metodo que permite crear un json web tojek
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, (err: any, token: string) => {
            if (err) {
                console.log(err)
                reject('No se pudo generar el token');
            }

            resolve(token);
        });

    });

}