import { Organization } from "./Organization.interface"
import { Role } from "./Role.interface"

export interface UserProject {
    _id: string
    name: string
    lastName: string
    email: string
    password: string
    run: string
    permissions: any
    roles: Role[]
    organizations: Organization[]
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