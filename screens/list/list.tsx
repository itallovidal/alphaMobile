import * as Styles from './list.styled'
import Header from "./components/header/Header";
import {Text} from "react-native";
import {useTheme} from "styled-components/native";
import {useNavigation} from "@react-navigation/native";
import User from "./components/user/user";
import {placeholder} from "../temp";


export interface IUser {
    username: string,
    fullname: string,
    email: string
    phoneNumber: number,
    // birthday: Date,
    CEP: number,
    district: string
    UF: string,
    street: string,
    city: string,
    id: string
}



function List() {
    const theme = useTheme()
    const navigation = useNavigation()
    return (
        <Styles.ScreenWrapper colors={[...theme.COLORS.GRADIENT]}>
            <Header/>
            <Styles.List data={placeholder}
                         renderItem={({item} : {item: IUser})=>{
                             return <User userData={item}/>
                         }}
                        keyExtractor={(item: IUser) => item.id}/>

            <Styles.Footer start={{ x: 0.7, y: 0 }} colors={[...theme.COLORS.GRADIENT]}>
                <Styles.BackButton onPress={()=> navigation.navigate('home')}><Text style={{color: 'white'}}>Voltar</Text></Styles.BackButton>
            </Styles.Footer>
        </Styles.ScreenWrapper>
    );
}

export default List;