import workOrederModel from "../models/WorkOrder.model"

export const findWOrders = async () => {
    const organizations = await workOrederModel.find({deleted: false})
    return organizations
}

export const writeNewWOrder = async (client: any) => {
    const newWOrder = await workOrederModel.create(client)
    return newWOrder
}

export const reWriteNewWOrder = async (client: any) => {
    const clientEdited = await workOrederModel.findByIdAndUpdate(client._id, client, {new: true})
    return clientEdited
}