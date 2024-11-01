import axios from "axios";
import { DocumentProject } from "../interfaces/Document.interface";
import { UserGoogle } from "../interfaces/User.interface";

export const newDocument = async (userId: string) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/docs/newDocument`, {userId: userId})
        return response.data
    } catch (error) {
        return error
    }
}

export const createDocument = async (document: DocumentProject, oauth: any, file: File) => {
    const formData = new FormData()
    formData.append('document', JSON.stringify(document))
    formData.append('file', file)
    formData.append('auth', JSON.stringify(oauth))
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/docs/createDocument`, formData, {headers: {
            "Content-Type": 'multipart/form-data'
        }})
        return response.data
    } catch (error) {
        return error
    }
}

export const getDocuments = async () => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/docs/getDocuments`)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}