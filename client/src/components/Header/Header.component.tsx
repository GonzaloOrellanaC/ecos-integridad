import { IonButton, IonButtons, IonHeader, IonIcon, IonToolbar } from "@ionic/react"
import { menu, person } from "ionicons/icons"
import { useEffect } from "react"
import { useAuthContext } from "../../context/Auth.context"
import { useMenuContext } from "../../context/Menu.context"
import { ArrowDown } from "../../icons"

export const Header = () => {
    const {openMenu, setOpenMenu} = useMenuContext()
    const {user} = useAuthContext()
    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <IonHeader>
                <IonToolbar>
                    <IonButtons slot={'start'}>
                        <IonButton onClick={() => {setOpenMenu(openMenu ? false : true)}}>
                            <IonIcon icon={menu} />
                        </IonButton>
                    </IonButtons>
                    <IonButtons slot={'end'}>
                        <IonButton className="iconUserButton" color={'primary'}>
                            {
                                user && user.image
                                ?
                                <img src={user.image} height={30} style={{borderRadius: '50%'}} alt="" />
                                :
                                <IonIcon icon={person} style={{merginRight: 8}}/>
                            }
                            <IonIcon src={ArrowDown} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
    )
}