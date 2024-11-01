import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonRow, IonThumbnail, IonToolbar } from "@ionic/react"
import { menu, person } from "ionicons/icons"
import { useMenuContext } from "../../context/Menu.context"
import { ArrowDown } from "../../icons"
import { HomeComponent } from "../../components/Home/Home.component"
import { useAuthContext } from "../../context/Auth.context"
import { useEffect } from "react"
import { Header } from "../../components/Header/Header.component"
export const HomeContainer = () => {
    
    return(
        <IonContent class="ion-padding">
            <HomeComponent />
        </IonContent>
    )
}