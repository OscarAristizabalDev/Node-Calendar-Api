import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const UsuarioSchema = new Schema<IUser>({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true }

});

module.exports = model<IUser>('User', UsuarioSchema);