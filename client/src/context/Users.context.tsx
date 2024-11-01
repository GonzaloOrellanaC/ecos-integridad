import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./Auth.context";
import { getAllUsers } from "../routes/Users.route";

export const UsersContext = createContext<any>({} as any)

export const UsersProvider = (props: any) => {

    const {user} = useAuthContext()

    const [users, setUsers] = useState([])


    useEffect(() => {
        if (user) {
            getUsers()
        }
    }, [user])

    const getUsers = async () => {
        const response = await getAllUsers()
        setUsers(response.users)
    }


    const values = {
        users
    }

    return (
        <UsersContext.Provider value={values}>
            {props.children}
        </UsersContext.Provider>
    )
}

export const useUsersContext = () => useContext(UsersContext)