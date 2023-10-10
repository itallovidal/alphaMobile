import React, {ReactNode} from 'react'


interface GlobalContextProps{
    user: IUser
    setUserData: (data: IUser)=> void
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

    function setUserData(data: IUser){
        setUser(data)
    }

    return <GlobalContext.Provider value={{setUserData, user}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalContextProvider;