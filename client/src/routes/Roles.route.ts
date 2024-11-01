import axios from 'axios'

const url = process.env.REACT_APP_API_URL

export const getAllRoles = async (token: string) => {
    try {
        const response = await axios.get(url+`/api/roles/getAllRoles`, {headers: {Authorization: token}})
        return response.data
    } catch (error) {
        console.log(error)
    }
}