import { Schema, model } from 'mongoose';
import { IEvent } from '../interfaces/IEvent';

const EventoSchema = new Schema<IEvent>({

    title: { type: String, require: true },
    notes: { type: String },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }, // Se hace una referencia al objeto User

});

module.exports = model<IEvent>('Event', EventoSchema);