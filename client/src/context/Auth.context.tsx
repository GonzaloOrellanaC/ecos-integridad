import { createContext, useContext, useEffect, useState } from "react"
import { UserGoogle, UserProject } from "../interfaces/User.interface"
import { loginApi } from "../routes/Auth.route"
import { OAuth, loginUserGoogle } from "../routes/OAuth.google.route"
import { getAllRoles } from "../routes/Roles.route"

interface AuthType {
    login: (email: string, password: string) => Promise<{
        state: boolean;
        data?: UserProject;
        error?: any;
    }>
    loginGoogle: (credential: string, client_id: string | string[]) => Promise<void>
    initSessionGoogle: (userGoogle: UserGoogle) => Promise<void>
    setSub: React.Dispatch<React.SetStateAction<string | undefined>>
    setUser: React.Dispatch<React.SetStateAction<UserProject | undefined>>
    token: string
    user: UserProject | undefined
    setOAuth: React.Dispatch<React.SetStateAction<UserGoogle | undefined>>
    oauth: UserGoogle | undefined
    isPhone: boolean
}

export const AuthContext = createContext<AuthType>({} as AuthType)

export const AuthProvider = (props: any) => {

    const [user, setUser] = useState<UserProject>()
    const [oauth, setOAuth] = useState<UserGoogle>()
    const [isPhone, setIsPhone] = useState<boolean>(false)
    const [token, setToken] = useState<string>('')
    const [sub, setSub] = useState<string>()
    const [roles, setRoles] = useState<any[]>([])

    const nameApp = import.meta.env.VITE_NAME_APP


    const login = (email: string, password: string) => {
        return new Promise<{
            state: boolean,
            data?: UserProject,
            error?: any
        }>(resolve => {
            try {
                loginApi(email, password)
                .then(response => {
                    const userCache = response.findUser
                    setToken(response.token)
                    localStorage.setItem('token', token)
                    console.log(response)
                    setUser(userCache)
                    resolve({
                        state: true,
                        data: userCache
                    })
                })
                .catch(error => {
                    resolve({
                        state: false,
                        error
                    })
                })
                
            } catch (error) {
                resolve({
                    state: false,
                    error
                })
            }
        })
    }

    const initSessionGoogle = async (userGoogle: UserGoogle) => {
        const response = await loginUserGoogle(userGoogle)
        console.log(response)
    } 

    const loginGoogle = async (credential: string, client_id: string | string[]) => {
        const response = await OAuth(credential,client_id)
        console.log(response)
    }

    useEffect(() => {
        if (token.length === 0) {
            const tokenSaved = localStorage.getItem('token')
            if (tokenSaved) {
                setToken(tokenSaved)
            }
        }
    }, [])

    useEffect(() => {
        if (nameApp) {
            const title = document.getElementById('nameApp')
            if (title) {
                title.innerText = nameApp
            }
        }
    }, [nameApp])

    useEffect(() => {
        if (user) {
            if (user.roles[0].name === 'SuperAdmin' || user.roles[0].name === 'admin') {
                getRoles()
            }
        }
    }, [user])

    useEffect(() => {
        console.log(roles)
    }, [roles])

    const getRoles = async () => {
        const response = await getAllRoles(token)
        setRoles(response.roles)
    }

    const values: AuthType = {
        login,
        loginGoogle,
        initSessionGoogle,
        setSub,
        setUser,
        token,
        user,
        setOAuth,
        oauth,
        isPhone
    }

    return (
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)