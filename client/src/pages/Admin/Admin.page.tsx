import { IonButton, IonButtons, IonCard, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow, IonToolbar } from "@ionic/react"
import { arrowBack } from "ionicons/icons"
import { useState } from "react"
import { useHistory } from "react-router"

export const AdminPage = () => {
    const history = useHistory()
    const [buttons, setbuttons] = useState([
        {
            id: 0,
            state: true,
            disabled: false,
            name: 'Usuarios',
            path: '/admin/users'
        },
        {
            id: 1,
            state: true,
            disabled: false,
            name: 'Clientes',
            path: '/admin/clients'
        }
    ])
    return (
        <IonPage>
            <IonToolbar>
                <IonButtons>
                    <IonButton onClick={() => {history.replace('/home')}}>
                        <IonIcon icon={arrowBack}/>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
            <IonContent class="ion-padding">
                <div style={{marginTop: 50}}>
                    <h1 style={{width: '100%', textAlign: 'center', margin: '20px 0px'}}>
                        Administración
                    </h1>
                    <IonGrid>
                        <IonRow>
                            <IonCol></IonCol>
                            <IonCol sizeXl="3" sizeLg="4" sizeMd="6" sizeSm="8" sizeXs="12">
                                {
                                    buttons.map((button) => {
                                        return (
                                            <IonCol key={button.id}>
                                                <IonCard onClick={() => {history.push(button.path)}} button style={{'--background': 'var(--ion-color-ecos-primary)',  textAlign: 'center'}}>
                                                    <IonCardTitle style={{margin: '30px 0px', '--color': 'var(--ion-color-ecos-primary-contrast)'}}>
                                                        {button.name}
                                                    </IonCardTitle>
                                                </IonCard>
                                            </IonCol>
                                        )
                                    })
                                }
                            </IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    )
}