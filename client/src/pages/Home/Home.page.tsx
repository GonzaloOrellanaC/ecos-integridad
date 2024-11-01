import { IonPage } from "@ionic/react"
import { HomeContainer } from "../../containers/Home/Home.container"
import { useEffect, useState } from "react"
import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar } from '@ionic/react';
import { MenuComponent } from "../../components/Menu/Menu.component";

export const HomePage = () => {
    return(
        <>
            <MenuComponent />
            <IonPage id="main-content">
                <HomeContainer />
            </IonPage>
        </>
    )
}