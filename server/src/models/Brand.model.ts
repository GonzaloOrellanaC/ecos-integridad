import { model, Schema, Document } from 'mongoose'

const brandItemSchema: Schema = new Schema(
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

const brandItemModel = model<Document>('BrandItem', brandItemSchema)

export default brandItemModel