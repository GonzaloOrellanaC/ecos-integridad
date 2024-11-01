import axios from 'axios'

const url = import.meta.env.VITE_BASE_URL

export const getAllRoles = async (token: string) => {
    try {
        const response = await axios.get(url+`/api/roles/getAllRoles`, {headers: {Authorization: token}})
        return response.data
    } catch (error) {
        console.log(error)
    }
}