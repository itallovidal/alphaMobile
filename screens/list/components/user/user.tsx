import React, {useRef, useState} from 'react';
import * as Styles from "./user.styled";
import {IUser} from "../../list";
import {Animated, Text} from "react-native";
import {CaretDown, CaretUp} from "phosphor-react-native";

interface IUserProps{
    userData: IUser
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
                <Styles.UserInfo>{userData.username + ' ' + userData.fullname}</Styles.UserInfo>
                <Styles.UserInfo>{userData.phoneNumber}</Styles.UserInfo>
                <Styles.UserInfo>{userData.CEP}</Styles.UserInfo>
                <Styles.UserInfo>{userData.district}</Styles.UserInfo>
                <Styles.UserInfo>{userData.street}</Styles.UserInfo>
                <Styles.UserInfo>{userData.city}</Styles.UserInfo>
                <Styles.UserInfo>{userData.UF}</Styles.UserInfo>
            </Styles.Body>
        </Styles.UserWrapper>
    );
}

export default User;