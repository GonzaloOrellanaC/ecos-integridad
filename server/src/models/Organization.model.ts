import { Organization } from '@/interfaces/Organization.interface'
import { model, Schema, Document } from 'mongoose'

const organizationSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        address: {
            type: String
        },
        phone: {
            type: String
        },
        city: {
            type: String
        },
        region: {
            type: String
        },
        country: {
            type: String
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

const organizationModel = model<Organization & Document>('Organization', organizationSchema)

export default organizationModel
