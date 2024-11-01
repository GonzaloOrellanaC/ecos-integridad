import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonRow, IonToolbar } from "@ionic/react"
import { menu, person } from "ionicons/icons"
import { useMenuContext } from "../../context/Menu.context"
import { ArrowDown } from "../../icons"
import { DocumentComponent } from "../../components/Documents/Document.component"
import { Header } from "../../components/Header/Header.component"

export const DocumentsContainer = () => {
    return(
        <IonContent>
            <Header />
            <DocumentComponent />
        </IonContent>
    )
}