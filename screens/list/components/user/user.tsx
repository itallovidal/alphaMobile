import React, {useRef, useState} from 'react';
import * as Styles from "./user.styled";
import {Animated, Text} from "react-native";
import {CaretDown, CaretUp} from "phosphor-react-native";
import {IRegisteredUsers} from "../../list";

interface IUserProps{
    userData: IRegisteredUsers
}
function User({userData} : IUserProps) {
    const [ isOpen, setIsOpen] = React.useState(false)
    const elHeight = useRef(new Animated.Value(0)).current


    function handleHeight(){
        if(!isOpen){
            Animated.timing(elHeight, {
                toValue: 186,
                duration: 200,
                useNativeDriver: false
            }).start()
        }

        if(isOpen){
            Animated.timing(elHeight, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false
            }).start()
        }
        setIsOpen(prev => !prev)
    }

    return (
        <Styles.UserWrapper activeOpacity={0.9} onPress={()=> handleHeight()}>
            <Styles.Header>
                <Styles.Title>{userData.email}</Styles.Title>
                <Styles.SubtitleWrapper>
                    <Styles.Subtitle>{isOpen ? 'Fechar' : 'Ver informações'}</Styles.Subtitle>
                    { isOpen ? <CaretUp size={24} weight={"bold"}/> : <CaretDown size={24} weight={"bold"} />}
                </Styles.SubtitleWrapper>
            </Styles.Header>
            <Styles.Body style={{height: elHeight}}>
                <Styles.UserInfo>{userData.nome + ' ' + userData.sobrenome}</Styles.UserInfo>
                <Styles.UserInfo>{userData.email}</Styles.UserInfo>
                <Styles.UserInfo>{userData.endereco.cep}</Styles.UserInfo>
                <Styles.UserInfo>{userData.endereco.bairro}</Styles.UserInfo>
                <Styles.UserInfo>{userData.endereco.rua}</Styles.UserInfo>
                <Styles.UserInfo>{userData.endereco.cidade}</Styles.UserInfo>
                <Styles.UserInfo>{userData.endereco.uf}</Styles.UserInfo>
            </Styles.Body>
        </Styles.UserWrapper>
    );
}

export default User;