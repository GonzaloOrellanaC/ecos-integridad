import { IonPage } from "@ionic/react"
import { MenuComponent } from "../../components/Menu/Menu.component"
import { DocumentsContainer } from "../../containers/Documents/Documents.container"

export const DocumentsPage = () => {
    return(
        <>
            <MenuComponent />
            <IonPage id="main-content">
                <DocumentsContainer />
            </IonPage>
        </>
    )
}