import { IonButton, IonButtons, IonContent, IonDatetime, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { arrowBack } from "ionicons/icons"
import { useHistory } from "react-router"

export const CalendarPage = () => {
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
                    Calendario
                </IonTitle>
            </IonToolbar>
            <IonContent>
                <div style={{
                    margin: 10,
                    border: '1px solid #ccc',
                    borderRadius: 8,
                    height: 'calc(100vh - 56px - 20px)',
                    textAlign: 'center'
                }}>
                    <IonDatetime
                        size={'cover'}
                        className="calendar"
                        presentation="date"
                    />
                </div>
            </IonContent>
        </IonPage>
    )
}