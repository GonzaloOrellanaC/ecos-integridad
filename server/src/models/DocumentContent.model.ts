import { DocumentContent } from '../interfaces/Document.interface'
import { model, Schema, Document } from 'mongoose'

const documentContentSchema: Schema = new Schema(
    {
        content: {
            type: String
        },
        document: {
            type: Schema.Types.ObjectId,
            ref: 'Document'
        },
        editingData: [
            {
                user: {
                    type: Schema.Types.ObjectId,
                    ref: 'User'
                },
                coordinates: Object
            }
        ]
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

const documentContentModel = model<DocumentContent & Document>('DocumentContent', documentContentSchema)

export default documentContentModel
