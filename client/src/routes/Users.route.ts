import axios from "axios"
import { UserProject } from "../interfaces/User.interface"

const url = import.meta.env.VITE_BASE_URL

export const getAllUsers = async () => {
    const response = await axios.get(`${url}/api/users/getAllUsers`)
    return response.data
}

export const createUser = async (userData: UserProject) => {
    const response = await axios.post(`${url}/api/users/newUser`, {userData})
    return response.data
}