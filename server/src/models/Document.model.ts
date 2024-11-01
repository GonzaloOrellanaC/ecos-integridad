import { DocumentProject } from '../interfaces/Document.interface'
import { model, Schema, Document } from 'mongoose'

const documentSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        index: {
            type: Number
        },
        description: {
            type: String
        },
        history: [
            {
                type: Object
            }
        ],
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        content: {
            type: Schema.Types.ObjectId,
            ref: 'DocumentContent'
        },
        organization: {
            type: Schema.Types.ObjectId,
            ref: 'Organization'
        },
        client: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        enabled: {
            type : Boolean
        },
        deleted: {
            type : Boolean
        },
        url: {
                type : String
        },
        type: {
                type : String
        },
        tags: [
            {
                type : String
            }
        ],
        usersAssigned: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
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

const documentModel = model<DocumentProject & Document>('Document', documentSchema)

export default documentModel
