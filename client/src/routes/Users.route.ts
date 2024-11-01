import axios from "axios"
import { UserProject } from "../interfaces/User.interface"

export const getAllUsers = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/getAllUsers`)
    return response.data
}

export const createUser = async (userData: UserProject) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/newUser`, {userData})
    return response.data
}