import { Organization } from "./Organization.interface"
import { UserProject } from "./User.interface"

export interface DocumentProject {
    _id?: string
    index: number
    name: string
    description: string
    createdAt?: string
    history: DocumentHistory[]
    createdBy?: UserProject | string
    updatedAt?: string
    content: DocumentContent | string
    organization: Organization | string
    client: UserProject | string
    enabled: boolean
    deleted: boolean
    url: string
    type: string
    tags: string[]
    usersAssigned: UserProject[][] | string[]
}

export interface DocumentContent {
    content: any
    document: DocumentProject | string
    editingData: DocumentContentEditingData[]
}

export interface DocumentContentEditingData {
    user: UserProject | string,
    coordinates: any
}

export interface DocumentHistory {
    id: number
    userId: string
    action: string
}