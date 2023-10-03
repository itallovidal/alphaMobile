import {useNavigation} from "@react-navigation/native";
import * as Styles from './home.styled'
import * as GlobalStyled from '../../styles/global.styled'
import {Image, Text} from "react-native";
import {useTheme} from "styled-components/native";
import Button from "./components/button/button";
import {onShare} from "../../utilities/share";


function Home() {
    const navigation = useNavigation()
    const theme = useTheme()

    return (
        <GlobalStyled.ScreenWrapper>
            <Styles.QrCodeWrapper>
                <Image source={require('../../assets/qrcodeplaceholder.png')}/>
            </Styles.QrCodeWrapper>


            <Styles.Nav start={{ x: 0.7, y: 0 }}
                        colors={[...theme.COLORS.GRADIENT]}>
                <Styles.Label start={{ x: 0.7, y: 0 }}
                              colors={[...theme.COLORS.GRADIENT]}><Text style={{color: 'white'}}>
                    QRCode Cadastramento</Text></Styles.Label>
                <Button onPress={()=> navigation.navigate('list')} message={'Total: 1000'}>Lista de Cadastros</Button>

                <Button onPress={()=> onShare()} message={'Whatsapp, Email'}>Compartilhar</Button>

                <Styles.WrapperLogo>
                    <Image source={require('../../assets/logo.png')}/>
                </Styles.WrapperLogo>
            </Styles.Nav>



        </GlobalStyled.ScreenWrapper>
    );
}

export default Home;