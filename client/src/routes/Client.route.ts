import axios from "axios"

export const getAllClients = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/client/getClients`)
    return response.data
}