import { IonPage } from "@ionic/react"
import { DocumentsContainer } from "../../containers/Documents/Documents.container"

export const DocumentsPage = () => {
    return(
        <>
            <IonPage id="main-content">
                <DocumentsContainer />
            </IonPage>
        </>
    )
}