import { Request } from 'express';
const moment = require('moment')

export const isDate = (value: Request) => {

    // Si no envían una fecha
    if (!value) {
        return false;
    }

    const fecha = moment(value);
    // si la fecha es valida
    if (fecha.isValid()) {
        return true;
    } else {
        return false;
    }
}

