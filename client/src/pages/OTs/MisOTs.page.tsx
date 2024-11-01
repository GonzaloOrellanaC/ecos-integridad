import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { arrowBack } from "ionicons/icons"
import { useHistory } from "react-router"

export const MisOTs = () => {
    const history = useHistory()
    return (
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonButton onClick={() => {history.goBack()}}>
                        <IonIcon icon={arrowBack} />
                    </IonButton>
                </IonButtons>
                <IonTitle slot="start">
                    Mis OTs
                </IonTitle>
            </IonToolbar>
            <IonContent class="ion-padding">

                <div style={{
                    margin: 10,
                    border: '1px solid #ccc',
                    borderRadius: 8,
                    height: 'calc(100vh - 56px - 20px  - 40px)',
                    textAlign: 'center'
                }}>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                ID
                            </IonCol>
                            <IonCol>
                                DESCRIPCIÓN
                            </IonCol>
                            <IonCol>
                                USUARIOS ASIGNADOS
                            </IonCol>
                            <IonCol>
                                PROYECTO
                            </IonCol>
                            <IonCol>
                                ESTADO
                            </IonCol>
                            <IonCol>
                                ACCIONES
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    )
}