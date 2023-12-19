import React, {ReactNode} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
interface GlobalContextProps{
    user: IUser
    setUserData: (data: IUser)=> void,
    getUserData: ()=> Promise<boolean>,
    logOut: ()=> Promise<void>
}

interface IPartido{
    nome: string,
    sigla: string
}

export interface IUser{
    nome: string,
    profile_image: string,
    id: string,
    collection_id: string
    email: string,
    siteInstitucional: string,
    facebook: string,
    instagram: string
    partido: IPartido,
    qrCode_image: string
}

export const GlobalContext = React.createContext({} as GlobalContextProps)

function GlobalContextProvider({children}: {children: ReactNode}) {
    const [user, setUser] = React.useState<IUser>({} as IUser)

    async function setUserData(data: IUser){
        await AsyncStorage.setItem('userData', JSON.stringify(data))
        setUser(data)
    }

    async function logOut(){
        await AsyncStorage.clear()
        setUser({} as IUser)
    }

    async function getUserData(){
        const data = await AsyncStorage.getItem('userData')

        if(data){
            const userData =  JSON.parse(data)
            setUser(userData)
            return true
        }

        return false
    }

    return <GlobalContext.Provider value={{setUserData, user, getUserData, logOut}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalContextProvider;