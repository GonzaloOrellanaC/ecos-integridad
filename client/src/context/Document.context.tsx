import { createContext, useContext, useEffect, useState } from "react"
import { createDocument, newDocument, getDocuments } from "../routes/Document.route"
import { DocumentProject } from "../interfaces/Document.interface"
import { useAuthContext } from "./Auth.context"

export const DocumentContext = createContext({} as any)

export const DocumentProvider = (props: any) => {
    const {user} = useAuthContext()
    const [documents, setDocuments] = useState<Document[]>([])
    const [urlDocEdit, setUrlDocEdit] = useState<string>()

    useEffect(() => {
        if (user) {
            getDocumentList()
        }
    }, [user])

    const addDocumentToProject = async (document: DocumentProject, oauth: any, file: File) => {
        const response = await createDocument(document, oauth, file)
        console.log(response)
    }

    const createNewDocument = async () => {
        if (user) {
            const {document} = await newDocument(user._id)
            const documentsCache = [...documents]
            documentsCache.push(document)
            setDocuments(documentsCache)
        }
    }

    const getDocumentList = async () => {
        const response = await getDocuments()
        console.log(response)
        setDocuments(response.documents) 
    }

    const openDoc = (url: string) => {
        setUrlDocEdit(url)
    }

    const values = {
        documents,
        setDocuments,
        addDocumentToProject,
        createNewDocument,
        getDocumentList,
        openDoc,
        urlDocEdit
    }

    return (
        <>
        <DocumentContext.Provider value={values}>
            {props.children}
        </DocumentContext.Provider>
        </>
    )
}

export const useDocumentContext = () => useContext(DocumentContext)