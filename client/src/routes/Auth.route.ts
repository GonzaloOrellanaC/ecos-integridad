import axios, { AxiosHeaders } from 'axios'

const url = process.env.REACT_APP_API_URL

export const loginApi = async (email: string, password: string) => {
    const data = {
        email,
        password
    }
    console.log(data)
    const response = await axios.post(url+`/api/login`, data)
    console.log(response.data)
    return response.data
}