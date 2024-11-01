import { model, Schema, Document } from 'mongoose'

const userOrganizationSchema: Schema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        organization: {
            type: Schema.Types.ObjectId,
            ref: 'Organization'
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

const userOrganizationModel = model<Document>('User_Organization', userOrganizationSchema)

export default userOrganizationModel