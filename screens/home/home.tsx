import {useFocusEffect, useNavigation} from "@react-navigation/native";
import * as Styles from './home.styled'
import * as GlobalStyled from '../../styles/global.styled'
import {Image, Text} from "react-native";
import {useTheme} from "styled-components/native";
import Button from "./components/button/button";
import {GlobalContext} from "../../context/GlobalContextProvider";
import React, {useState} from 'react'
import {getUserCount} from "../../utilities/API/getUserCount";
import {downloadCSV} from "../../utilities/downloadCSV";

function Home() {
    const navigation = useNavigation()
    const theme = useTheme()
    const {user} = React.useContext(GlobalContext)
    const [count, setCount] = useState(0)

    console.log(user.qrCode_image)
    useFocusEffect(
        React.useCallback(() => {
            getUserCount(user.collection_id).then((data)=>{
                console.log(data)
                setCount(data)
            })
        }, [])
    );

    return (
        <GlobalStyled.ScreenWrapper>
            <Styles.QrCodeWrapper>
                <Image style={{height: 400, width: '100%'}} source={{uri: user.qrCode_image}}/>
            </Styles.QrCodeWrapper>


            <Styles.Nav start={{ x: 0.7, y: 0 }} colors={[...theme.COLORS.GRADIENT]}>
                <Styles.Label start={{ x: 0.7, y: 0 }} colors={[...theme.COLORS.GRADIENT]}>
                    <Text style={{color: 'white'}}>Bem vindo, {user.nome}</Text>
                </Styles.Label>

                <Button onPress={()=> navigation.navigate('list')} message={'Total:' + count}>Lista de Cadastros</Button>
                <Button onPress={()=> downloadCSV(user.collection_id)} message={'Whatsapp, Email'}>Baixar CSV</Button>

                {/*<Styles.WrapperLogo>*/}
                {/*    <Image source={require('../../assets/logo.png')}/>*/}
                {/*</Styles.WrapperLogo>*/}
            </Styles.Nav>



        </GlobalStyled.ScreenWrapper>
    );
}

export default Home;