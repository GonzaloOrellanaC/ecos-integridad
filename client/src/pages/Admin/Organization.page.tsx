import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { arrowBack } from "ionicons/icons"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"

export const OrganizationPage = () => {
    const params: any = useParams()
    const history = useHistory()
    const [titulo, setTitulo] = useState('')

    useEffect(() => {
        if (params && params.id) {
            setTitulo('Editar cliente')
        } else {
            setTitulo('Crear nuevo cliente')
        }
    }, [params])
    return (
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
                                <IonCol className="padding-inputs" sizeXl="12" sizeLg="12" sizeMd="12" sizeSm="12" sizeXs="12">
                                    <IonInput fill="outline" label="Nombre empresa" name="nombre" labelPlacement="floating" />
                                </IonCol>
                                <IonCol className="padding-inputs" sizeXl="12" sizeLg="12" sizeMd="12" sizeSm="12" sizeXs="12">
                                    <IonInput fill="outline" label="Nombre comercial" name="nombreComercial" labelPlacement="floating" />
                                </IonCol>
                                <IonCol className="padding-inputs" sizeXl="8" sizeLg="8" sizeMd="12" sizeSm="12" sizeXs="12">
                                    <IonInput fill="outline" label="RUT" name="rut" labelPlacement="floating" />
                                </IonCol>
                                <IonCol className="padding-inputs" sizeXl="8" sizeLg="8" sizeMd="12" sizeSm="12" sizeXs="12">
                                    <IonInput fill="outline" label="Email" name="email" labelPlacement="floating" />
                                </IonCol>
                                <IonCol className="padding-inputs" sizeXl="8" sizeLg="8" sizeMd="12" sizeSm="12" sizeXs="12">
                                    <IonInput fill="outline" label="Telefono" name="tel" labelPlacement="floating" />
                                </IonCol>
                                <IonCol className="padding-inputs" sizeXl="12" sizeLg="12" sizeMd="12" sizeSm="12" sizeXs="12">
                                    <IonInput fill="outline" label="Dirección" name="direccion" labelPlacement="floating" />
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