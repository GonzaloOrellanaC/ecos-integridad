import { ObjectId } from "mongoose"
import { Organization } from "./Organization.interface"
import { UserProject } from "./User.interface"

export interface DocumentProject {
    _id?: string
    index: number
    name: string
    description: string
    createdAt?: string
    history: DocumentHistory[]
    createdBy?: UserProject | ObjectId | string
    updatedAt?: string
    content: DocumentContent | ObjectId | string
    organization: Organization | ObjectId | string
    client: UserProject | ObjectId | string
    enabled: boolean
    deleted: boolean
    url: string
    type: string
    tags: string[]
    usersAssigned: UserProject[] | ObjectId[] | string[]
}

export interface DocumentContent {
    content: any
    document: DocumentProject | string
    editingData: DocumentContentEditingData[]
}

export interface DocumentContentEditingData {
    user: UserProject | ObjectId | string,
    coordinates: any
}

export interface DocumentHistory {
    id: number
    userId: string
    action: string
}