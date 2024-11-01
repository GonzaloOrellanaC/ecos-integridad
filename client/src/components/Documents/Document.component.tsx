import { IonCol, IonGrid, IonRow } from "@ionic/react"
import { DocumentListComponent } from "./DocumentList.component"

export const DocumentComponent = () => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    
                </IonCol>
                <IonCol sizeXl="3" sizeLg="3" sizeMd="6" sizeSm="12" sizeXs="12">
                    <DocumentListComponent />
                </IonCol>
                <IonCol>
                    
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}