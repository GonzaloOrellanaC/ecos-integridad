import axios from "axios"
import { UserGoogle } from "../interfaces/User.interface"

const url = import.meta.env.VITE_BASE_URL

export const OAuth = async (credential: string, client_id: string | string[]) => {
    const response = await axios.post(`${url}/api/google/auth`, {credential: credential, client_id: client_id})
    return response.data
}

export const loginUserGoogle = async (userGoogle: UserGoogle) => {
    const response = await axios.post(`${url}/api/google/login`, {userGoogle: userGoogle})
    return response.data
}