import { ObjectId } from "mongoose"
import { Organization } from "./Organization.interface"
import { Role } from "./Role.interface"
import { Request } from "express"

export interface UserProject {
    _id: string | ObjectId
    name: string
    lastName: string
    email: string
    password: string
    permissions: any
    roles: Role[] | ObjectId[]
    organizations: Organization[] | ObjectId[]
    image: string
    state: boolean
    deleted: boolean
    phone: string
    user_id: number
    emailVerifiedAt: Date
    createdAt: Date
    updatedAt: Date
}

export interface UserGoogle {
    name: string
    lastName: string
    email: string
    image: string
    fullName: string
    companyDomain: string
    language: string
    sub: string
}

export interface RequestWithUser extends Request {
    user?: UserProject
}