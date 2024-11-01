import { Inventory } from '../interfaces/Inventory.interface'
import { model, Schema, Document } from 'mongoose'

const itemSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        description: {
            type: String
        },
        serial: {
            type: String
        },
        typeItem: {
            type: Schema.Types.ObjectId,
            ref: 'TypeItem'
        },
        modelItem: {
            type: Schema.Types.ObjectId,
            ref: 'ModelItem'
        },
        brandItem: {
            type: Schema.Types.ObjectId,
            ref: 'BrandItem'
        },
        inventory: {
            type: Schema.Types.ObjectId,
            ref: 'Inventory'
        },
        manufacturingDate: {
            type: Date
        },
        dateShop: {
            type: Date
        },
        valorization: {
            type: Number
        },
        maitenanceHistory: [
            {
                user: {
                    type: Schema.Types.ObjectId,
                    ref: 'User'
                },
                dateMaitenance: {
                    type: Date
                },
                nextDateMaitenance: {
                    type: Date
                }
            }
        ],
        images: [
            {
                name: {
                    type: String
                },
                url: {
                    type: String
                },
                userUpload: {
                    type: Schema.Types.ObjectId,
                    ref: 'User'
                },
                id: {
                    type: Number
                }
            }
        ],
        state: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    }
)

const itemModel = model<Inventory | Document>('Item', itemSchema)

export default itemModel