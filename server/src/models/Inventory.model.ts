import { model, Schema, Document } from 'mongoose'

const inventorySchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        description: {
            type: String
        },
        total: {
            type: Number
        },
        store: {
            type: Schema.Types.ObjectId,
            ref: 'Store'
        },
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

const inventoryModel = model<Document>('Inventory', inventorySchema)

export default inventoryModel