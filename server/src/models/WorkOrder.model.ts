import { model, Schema, Document } from 'mongoose'

const workOrederSchema: Schema = new Schema(
    {
        index: {
            type: Number
        },
        description: {
            type: String
        },
        organization: {
            type: Schema.Types.ObjectId,
            required: [true, 'Organization is required']
        },
        project: {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        },
        dateProgram: {
            type: Date
        },
        dateInit: {
            type: Date
        },
        dateEnd: {
            type: Date
        },
        dateClose: {
            type: Date
        },
        history: [
            {
                type: Object
            }
        ],
        assign: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        state: {
            type: Boolean,
            default: true
        },
        executionPattern: {
            type: Schema.Types.ObjectId,
            ref: 'ExecutionPattern'
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

const workOrederModel = model<Document>('WorkOrder', workOrederSchema)

export default workOrederModel