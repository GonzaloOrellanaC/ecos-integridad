import { IonItem, IonLabel, IonList } from "@ionic/react"
import { useDocumentContext } from "../../context/Document.context"
import { useHistory } from "react-router"
import axios from "axios"
import { useAuthContext } from "../../context/Auth.context"
const NewDoc = './assets/files/newDoc.docx'

export const DocumentListComponent = () => {

    const {oauth} = useAuthContext()
    const {documents, addDocumentToProject, createNewDocument, openDoc} = useDocumentContext()
    const history = useHistory()
    
    const findDoc = async () => {
        const doc = await axios.get(NewDoc, {responseType: 'blob'})
        console.log(doc)
        addDocumentToProject({
            name: 'dewDoc.docx'
        }, oauth, doc.data)
    }

    return (
        <IonList>
            <IonItem button onClick={() => {createNewDocument()}}>
                Crear Documento
            </IonItem>
            {
                documents.map((doc: any, index: number) => {
                    return (
                        <IonItem key={`document_${index + 1}`} button onClick={() => {history.push('/new-document'); openDoc(doc.url)}}>
                            <IonLabel slot={'start'}>
                                {`${doc.name}`}
                            </IonLabel>
                            <IonLabel slot={'end'}>
                                {`${doc.type}`}
                            </IonLabel>
                        </IonItem>
                    )
                })
            }
        </IonList>
    )
}