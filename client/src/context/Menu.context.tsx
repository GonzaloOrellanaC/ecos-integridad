import { createContext, useContext, useEffect, useState } from "react"
import { menuController } from '@ionic/core/components';

export const MenuContext = createContext({} as any)

export const MenuProvider = (props: any) => {

    const [openMenu, setOpenMenu] = useState(false)
    const [menuType, setMenuType] = useState('overlay')

    useEffect(() => {
        if (openMenu) {
            openMenuMain()
        } else {
            closeMenuMain()
        }
    }, [openMenu])

    const openMenuMain = async () => {
        await menuController.open('main-menu')
    }

    const closeMenuMain = async () => {
        await menuController.close('main-menu')
    }

    const values = {
        setOpenMenu,
        openMenu,
        menuType,
        setMenuType,
        closeMenuMain
    }

    return (
        <MenuContext.Provider value={values}>
            {props.children}
        </MenuContext.Provider>
    )
}

export const useMenuContext = () => useContext(MenuContext)