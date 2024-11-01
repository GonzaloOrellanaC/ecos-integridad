/* import { Organization } from "@/interface" */
import { Organization } from "@/interfaces/Organization.interface"
import organizationModel from "@/models/Organization.model"

export const findClients = async () => {
    const organizations = await organizationModel.find({deleted: false})
    return organizations
}

export const writeNewClient = async (client: Organization) => {
    const newClient = await organizationModel.create(client)
    return newClient
}

export const reWriteNewClient = async (client: Organization) => {
    const clientEdited = await organizationModel.findByIdAndUpdate(client._id, client, {new: true})
    return clientEdited
}