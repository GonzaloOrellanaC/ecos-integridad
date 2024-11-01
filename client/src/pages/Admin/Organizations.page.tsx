import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { add, arrowBack } from "ionicons/icons"
import { useHistory } from "react-router"

export const OrganizationsPage = () => {
    const history = useHistory()
    return (
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonButton onClick={() => {history.goBack()}}>
                        <IonIcon icon={arrowBack} />
                    </IonButton>
                </IonButtons>
                <IonTitle slot={'start'}>
                    Clientes
                </IonTitle>
                <IonButtons slot="end">
                    <IonButton title="Nuevo cliente" shape="round" onClick={() => {history.push('/new-client')}}>
                        <IonIcon slot="icon-only" icon={add} />
                    </IonButton>
                </IonButtons>
            </IonToolbar>
            <IonContent class="ion-padding">
                <div style={{
                    margin: 10,
                    border: '1px solid #ccc',
                    borderRadius: 8,
                    height: 'calc(100vh - 56px - 20px - 40px)',
                    textAlign: 'center'
                }}>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                ID
                            </IonCol>
                            <IonCol>
                                NOMBRE
                            </IonCol>
                            <IonCol>
                                CORREO
                            </IonCol>
                            <IonCol>
                                RUT
                            </IonCol>
                            <IonCol>
                                PROYECTOS
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