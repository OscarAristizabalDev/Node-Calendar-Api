import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const UsuarioSchema = new Schema<IUser>({

    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true }

});

module.exports = model<IUser>('User', UsuarioSchema);