import { ObjectId } from "mongoose"
import { Organization } from "./Organization.interface"

export interface Role {
    name: string
    description: string
    organization: Organization | ObjectId | string
}