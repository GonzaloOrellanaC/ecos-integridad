import { IonButton, IonCol, IonContent, IonDatetime, IonFab, IonFabButton, IonGrid, IonIcon, IonInput, IonItem, IonList, IonPopover, IonRippleEffect, IonRow } from "@ionic/react"
import { Divider } from "../General/Divider.component"
import { barChart, calendarNumber, chatbubbleEllipses, documentAttach, documentText, person, send } from "ionicons/icons"
import { Bar } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faFolder, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { useAuthContext } from "../../context/Auth.context";

export const HomeComponent = () => {
    const {isPhone} = useAuthContext()

    const history = useHistory()

    return (
        <div>
            {
                !isPhone ?
                <div style={{position: 'relative', height: '95vh'}}>
                    <img src="./assets/ecos/logo-ecos-integridad.svg" style={{height: '10vh', marginLeft: 10}} alt="" />
                    <img src="./assets/ecos/logo.png" style={{height: '80vh', position: 'absolute', bottom: 10, left: 10}} alt="" />
                    <div style={{paddingTop: 100, position: "absolute", right: 0, bottom: 0, width: '70vw', zIndex: 10, height: '95vh'}}>
                        <div style={{width: '90%', marginBottom: 20}}>
                            <IonRow>
                                <IonCol size={'auto'}>
                                    <button onClick={() => {history.push('/my-ots')}} className="ion-activatable ripple-parent" style={{backgroundColor: '#21445B', color: 'white', height: 100, width: 100, borderRadius: 8}}>
                                        <IonRippleEffect/>
                                        <FontAwesomeIcon size={'4x'} icon={faFolder} />
                                    </button>
                                </IonCol>
                                <IonCol>
                                    <p style={{fontSize: 30, marginLeft: 10, color: '#21445B'}}>
                                    {`Mis OT`}
                                    </p>
                                </IonCol>
                            </IonRow>
                        </div>
                        <div style={{marginLeft: '13%', marginBottom: 20}}>
                            <IonRow>
                                <IonCol size={'auto'}>
                                    <button onClick={() => {history.push('/admin')}} className="ion-activatable ripple-parent" style={{backgroundColor: '#21445B', color: 'white', height: 100, width: 100, borderRadius: 8}}>
                                        <IonRippleEffect/>
                                        <FontAwesomeIcon size={'4x'} icon={faUserTie}/>
                                    </button>
                                </IonCol>
                                <IonCol>
                                    <p style={{fontSize: 30, marginLeft: 10, color: '#21445B'}}>
                                    {`Admin`}
                                    </p>
                                </IonCol>
                            </IonRow>
                        </div>
                        <div style={{marginLeft: '25%', marginBottom: 20}}>
                            <IonRow>
                                <IonCol size={'auto'}>
                                    <button onClick={() => {history.push('/calendar')}} className="ion-activatable ripple-parent" style={{backgroundColor: '#21445B', color: 'white', height: 100, width: 100, borderRadius: 8}}>
                                        <IonRippleEffect/>
                                        <FontAwesomeIcon size={'4x'} icon={faCalendar}/>
                                    </button>
                                </IonCol>
                                <IonCol>
                                    <p style={{fontSize: 30, marginLeft: 10, color: '#21445B'}}>
                                    {`Calendario`}
                                    </p>
                                </IonCol>
                            </IonRow>
                        </div>
                        <div style={{marginLeft: '32%', marginBottom: 20}}>
                            <IonRow>
                                <IonCol size={'auto'}>
                                    <button disabled className="ion-activatable ripple-parent" style={{backgroundColor: '#21445B', color: 'white', height: 100, width: 100, borderRadius: 8}}>
                                        <IonRippleEffect/>
                                        <FontAwesomeIcon size={'4x'} icon={faUser}/>
                                    </button>
                                </IonCol>
                                <IonCol>
                                    <p style={{fontSize: 30, marginLeft: 10, color: '#21445B'}}>
                                    {`Usuario`}
                                    </p>
                                </IonCol>
                            </IonRow>
                        </div>
                    </div>
                </div>
                :
                <div>

                </div>
            }
        </div>
    )
}