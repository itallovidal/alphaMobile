import * as Styles from './list.styled'
import Header from "./components/header/Header";
import {Text} from "react-native";
import {useTheme} from "styled-components/native";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import User from "./components/user/user";
import React from 'react'
import {GlobalContext, IUser} from "../../context/GlobalContextProvider";
import {getAllRegisteredUsers} from "../../utilities/API/getAllRegisteredUsers";

interface IAddress{
    bairro: string,
    cep: string,
    cidade: string,
    rua: string,
    uf: string
}

export interface IRegisteredUsers{
    data_nascimento: string,
    email: string,
    endereco: IAddress,
    nome: string,
    sobrenome: string,
    telefone: string,
    id: string,
}

function List() {
    const theme = useTheme()
    const navigation = useNavigation()
    const [users, setUsers] = React.useState<IRegisteredUsers[]>([])
    const {user} = React.useContext(GlobalContext)

    useFocusEffect(
        React.useCallback(() => {
            getAllRegisteredUsers(user.collection_id).then((data)=>{
                console.log(data)
                setUsers(data)
            })
        }, [])
    );

    return (
        <Styles.ScreenWrapper colors={[...theme.COLORS.GRADIENT]}>
            <Header/>
            <Styles.List data={users}
                         renderItem={({item} : {item: IRegisteredUsers})=>{
                             return <User userData={item}/>
                         }}
                        keyExtractor={(item: IRegisteredUsers) => item.id}/>

            <Styles.Footer start={{ x: 0.7, y: 0 }} colors={[...theme.COLORS.GRADIENT]}>
                <Styles.BackButton onPress={()=> navigation.navigate('home')}><Text style={{color: 'white'}}>Voltar</Text></Styles.BackButton>
            </Styles.Footer>
        </Styles.ScreenWrapper>
    );
}

export default List;