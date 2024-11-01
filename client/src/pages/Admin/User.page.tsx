import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react"
import { add, arrowBack, eyedropOutline, eyeOffOutline, eyeOutline } from "ionicons/icons"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { UserProject } from "../../interfaces/User.interface"

export const UserPage = () => {
    const params: any = useParams()
    const [mostrarPassword, setMostrarPassword] = useState(false)
    const [titulo, setTitulo] = useState('')
    const [newUser, setNewUser] = useState<UserProject>({} as UserProject)
    const history = useHistory()

    useEffect(() => {
        if (params && params.id) {
            setTitulo('Editar usuario')
        } else {
            setTitulo('Crear nuevo usuario')
        }
    }, [params])

    const userValues = (name: string, value: string) => {
        setNewUser({...newUser, [name]: value})
    }

    return(
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonButton onClick={() => {history.goBack()}}>
                        <IonIcon icon={arrowBack} />
                    </IonButton>
                </IonButtons>
                <IonTitle slot={'start'}>
                    {titulo}
                </IonTitle>
            </IonToolbar>
            <IonContent class="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol sizeXl="4" sizeLg="5" sizeMd="8" sizeSm="10" sizeXs="12">
                            <IonRow>
                                <IonCol className="padding-inputs" sizeXl="6" sizeLg="6" sizeMd="12" sizeSm="12" sizeXs="12">
                                    <IonInput fill="outline" label="Nombre" name="name" labelPlacement="floating" />
                                </IonCol>
                                <IonCol className="padding-inputs" sizeXl="6" sizeLg="6" sizeMd="12" sizeSm="12" sizeXs="12">
                                    <IonInput fill="outline" label="Apellido" name="lastName" labelPlacement="floating" />
                                </IonCol>
                                <IonCol className="padding-inputs" sizeXl="8" sizeLg="8" sizeMd="12" sizeSm="12" sizeXs="12">
                                    <IonInput fill="outline" label="RUN" name="run" labelPlacement="floating" />
                                </IonCol>
                                <IonCol className="padding-inputs" sizeXl="12" sizeLg="12" sizeMd="12" sizeSm="12" sizeXs="12">
                                    <IonSelect interface="popover"  fill="outline" label="Empresa" labelPlacement="floating">
                                        <IonSelectOption>Empresa 1</IonSelectOption>
                                        <IonSelectOption>Empresa 1</IonSelectOption>
                                        <IonSelectOption>Empresa 1</IonSelectOption>
                                    </IonSelect>
                                </IonCol>
                                <IonCol className="padding-inputs" sizeXl="12" sizeLg="12" sizeMd="12" sizeSm="12" sizeXs="12">
                                    <IonSelect multiple interface="popover"  fill="outline" label="Empresa" labelPlacement="floating">
                                        <IonSelectOption>Empresa 1</IonSelectOption>
                                        <IonSelectOption>Empresa 1</IonSelectOption>
                                        <IonSelectOption>Empresa 1</IonSelectOption>
                                    </IonSelect>
                                </IonCol>
                                <IonCol className="padding-inputs" sizeXl="8" sizeLg="8" sizeMd="12" sizeSm="12" sizeXs="12">
                                    <IonInput fill="outline" label="Email" name="email" labelPlacement="floating" />
                                </IonCol>
                                <IonCol className="padding-inputs" sizeXl="8" sizeLg="8" sizeMd="12" sizeSm="12" sizeXs="12">
                                    <div style={{position: 'relative'}}>
                                        <IonInput fill="outline" label="Password" name="email" labelPlacement="floating" type={mostrarPassword ? 'text' : 'password'} />
                                        <IonButton style={{position: 'absolute', right: 10, top: 10, zIndex: 1000}} fill={'clear'} shape="round" onClick={() => {setMostrarPassword(mostrarPassword ? false : true)}}>
                                            <IonIcon slot="icon-only" icon={mostrarPassword ? eyeOutline : eyeOffOutline} />
                                        </IonButton>
                                    </div>
                                </IonCol>
                                <IonCol className="padding-inputs" sizeXl="8" sizeLg="8" sizeMd="12" sizeSm="12" sizeXs="12">
                                    <IonButton style={{'--background':'var(--ion-color-ecos-primary)', '--color': 'var(--ion-color-ecos-primary-contrast)'}}>
                                        Guardar
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}