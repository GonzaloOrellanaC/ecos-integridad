import { Schema } from "mongoose"

export interface Inventory {
    name: string
    description: string
    serial: string
    typeItem: string | Schema.Types.ObjectId
    modelItem: string | Schema.Types.ObjectId
    brandItem: string | Schema.Types.ObjectId
    inventory: string | Schema.Types.ObjectId
    manufacturingDate: Date
    dateShop: Date
    valorization: Number
    maitenanceHistory: MaitenanceHistory[]
    images: ImageUrl[]
}

export interface MaitenanceHistory {
    user: string | Schema.Types.ObjectId
    dateMaitenance: Date
    nextDateMaitenance: Date
}

export interface ImageUrl {
    user: string | Schema.Types.ObjectId
    id: number
    url: string
    name: string
}