import { IonPage } from "@ionic/react"
import { HomeContainer } from "../../containers/Home/Home.container"
import { useEffect, useState } from "react"
import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar } from '@ionic/react';

export const HomePage = () => {
    return(
        <>
            <IonPage id="main-content">
                <HomeContainer />
            </IonPage>
        </>
    )
}