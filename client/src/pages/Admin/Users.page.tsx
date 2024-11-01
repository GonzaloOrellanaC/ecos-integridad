import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonIcon, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { arrowBack, personAdd } from "ionicons/icons"
import { useHistory } from "react-router"

export const UsersPage = () => {
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
                    Usuarios
                </IonTitle>
                <IonButtons slot="end">
                    <IonButton title="Nuevo usuario" shape="round" onClick={() => {history.push('/new-user')}}>
                        <IonIcon slot="icon-only" icon={personAdd} />
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
                                RUN
                            </IonCol>
                            <IonCol>
                                ROLES
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