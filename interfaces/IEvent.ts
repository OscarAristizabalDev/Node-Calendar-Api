import { IUser } from "./IUser"

export class IEvent{
    title: string
    notes: string
    start: Date
    end: Date
    user: IUser
}