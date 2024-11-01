import { model, Schema, Document } from 'mongoose'

const modelItemSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        description: {
            type: String
        },
        organization: {
            type: Schema.Types.ObjectId,
            required: [true, 'Organization is required']
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

const modelItemModel = model<Document>('ModelItem', modelItemSchema)

export default modelItemModel