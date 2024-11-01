import { IonContent } from "@ionic/react"
import { DocumentEditorComponent } from "../../components/Documents/DocumentEditor.component"
import { Header } from "../../components/Header/Header.component"

export const DocumentEditorContainer = () => {
    return (
        <IonContent>
            <Header />
            <DocumentEditorComponent />
        </IonContent>
    )
}