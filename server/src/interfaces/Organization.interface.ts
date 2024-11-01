import { ObjectId } from "mongoose"

export interface Organization {
    _id: ObjectId | string
    name: string
    address: string
    phone: string
    city: string
    region: string
    country: string
}