import axios from "axios"

const url = import.meta.env.VITE_BASE_URL

export const getAllClients = async () => {
    const response = await axios.get(`${url}/api/client/getClients`)
    return response.data
}