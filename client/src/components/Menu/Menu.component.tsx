import { IonContent, IonMenu } from "@ionic/react"
import { useMenuContext } from "../../context/Menu.context"
import { Control, Home, Logout } from "../../icons"
import { LogoComponent } from "../General/Logo.component"
import { useHistory } from "react-router"
import { Divider } from "../General/Divider.component"

export const MenuComponent = () => {
    const {setOpenMenu, menuType, closeMenuMain} = useMenuContext()
    const history = useHistory()
    return (
        <IonMenu className="menuMain" menuId="main-menu" contentId="main-content" type={menuType} onIonDidClose={() => setOpenMenu(false)}>
            <IonContent className="menuContainer">
                <div style={{height: 80}}>
                    <LogoComponent />
                </div>
                <Divider />
                <div style={{marginTop: 40}}>
                    <button className={`menuButtonActive`} onClick={() => {history.push('/home'); closeMenuMain()}}>
                        <img className="menuIconActive" src={Home} /> <p className="menuText">Inicio</p>
                    </button>
                    <button className={`menuButton`} onClick={() => {closeMenuMain()}}>
                        <img className="menuIcon" src={Control} /> <p className="menuText">Dashboard</p>
                    </button>
                    <button className={`menuButton`} onClick={() => {history.replace('/login'); closeMenuMain()}}>
                        <img className="menuIcon" src={Logout} /> <p className="menuText">Salir</p>
                    </button>
                </div>
            </IonContent>
        </IonMenu>
    )
}