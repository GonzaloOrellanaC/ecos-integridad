import roleModel from "../models/Role.model"

export const createRole = async (name: string, organization: string) => {
    const newRole = await roleModel.create({name, organization})
    return newRole
}

export const getRoles = async () => {
    try {
        const roles = await roleModel.find({state: true})
        return roles
    } catch (error) {
        console.log(error)
    }
}