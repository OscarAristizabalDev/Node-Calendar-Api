import { Schema, model } from 'mongoose';
import { IEvent } from '../interfaces/IEvent';

const EventoSchema = new Schema<IEvent>({

    title: { type: String, required: true },
    notes: { type: String },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Se hace una referencia al objeto User

});

// permite realizar modificaciones a la hora de retorne al JSON
EventoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject(); // se toman los valores de todo el objeto
    object.id = _id; // se hace un reemplazo de _id por id
    return object
})

module.exports = model<IEvent>('Event', EventoSchema);