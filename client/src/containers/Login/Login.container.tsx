import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/react"
import { useAuthContext } from "../../context/Auth.context"
import { useState } from "react"
import { useHistory } from "react-router"

export const LoginContainer = () => {
    const {login} = useAuthContext()
    const history = useHistory()
    const [loginValues, setLoginValues] = useState({
        email: '',
        password: ''
    })

    const getLoginValues = (name: string, value: string) => {
        setLoginValues({...loginValues, [name]: value})
    }

    const loginUserWithValues =  async () => {
        const {email, password} = loginValues
        const response = await login(email, password)
        if (response.state) {
            history.replace('/home')
        } else {
            console.log(response.error)
        }
    }

    return(
        <IonContent class="ion-padding">
            <IonGrid>
                <IonRow>
                    <IonCol sizeXl="4.5" sizeLg="4" sizeMd="3" sizeSm="1" sizeXs="0">

                    </IonCol>
                    <IonCol sizeXl="3" sizeLg="4" sizeMd="6" sizeSm="10" sizeXs="12">
                        <div style={{padding: '30px 10px', marginTop: 30, border: '1px solid #ccc', borderRadius: 8}}>
                            <img src="./assets/ecos/logo-ecos-integridad.svg" />
                            <input onChange={(e) => {getLoginValues(e.target.name, e.target.value)}} placeholder="Email" name={'email'} style={{border: '1px solid #ccc', borderRadius: 8, marginTop: 20}}/>
                            <input onChange={(e) => {getLoginValues(e.target.name, e.target.value)}} placeholder="Contraseña" name={'password'} style={{border: '1px solid #ccc', borderRadius: 8}}/>
                            <button onClick={loginUserWithValues} style={{width: '100%', border: '1px solid #ccc', borderRadius: 8, height: 48, marginBottom: 20, backgroundColor: '#21445B', color: 'white', fontSize: 14}}>
                                Iniciar
                            </button>
                            <button  style={{width: '100%', border: '1px solid #ccc', borderRadius: 8, height: 48, marginBottom: 20, backgroundColor: '#009BD9', color: 'white', fontSize: 14}}>
                                Restaurar Contraseña
                            </button>
                        </div>
                    </IonCol>
                    <IonCol sizeXl="4.5" sizeLg="4" sizeMd="3" sizeSm="1" sizeXs="0">
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    )
}