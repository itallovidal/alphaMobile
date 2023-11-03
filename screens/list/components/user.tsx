import React from 'react';
import {CaretDown, CaretUp} from "phosphor-react-native";
import {IRegisteredUsers} from "../list";
import {HStack, Text, } from "native-base";
import {AnimatedPressable, AnimatedVStack} from "../../../style/Reanimated";
import {
    FadeIn,
    FadeInUp,
    FadeOut,
    FadeOutDown,
    FadingTransition,
    Keyframe,
    Layout, StretchInY,
    StretchOutY
} from "react-native-reanimated";

interface IUserProps{
    userData: IRegisteredUsers,
    index: number
}

function User({userData, index} : IUserProps) {
    const [ isOpen, setIsOpen] = React.useState(false)

    return (
        <AnimatedPressable
            layout={Layout.duration(200)}
            onPress={()=> setIsOpen(prev => !prev)}
            entering={FadeIn.delay(index * 100)}
            my={3} bg={"white"} p={5} rounded={5}>
            <Text fontSize={24} fontWeight={"bold"}>{userData.email}</Text>
            <HStack w={"full"} justifyContent={"space-between"}>
                <Text fontSize={18} mb={5}>{isOpen ? 'Fechar' : 'Ver informações'}</Text>
                { isOpen ? <CaretUp size={24} weight={"bold"}/> : <CaretDown size={24} weight={"bold"} />}
            </HStack>

            {isOpen && (
                <AnimatedVStack
                    exiting={FadeOutDown}
                    entering={FadeIn.delay(400)}
                >
                    <Text fontSize={16}>{userData.nome + ' ' + userData.sobrenome}</Text>
                    <Text fontSize={16}>{userData.email}</Text>
                    <Text fontSize={16}>{userData.endereco.cep}</Text>
                    <Text fontSize={16}>{userData.endereco.bairro}</Text>
                    <Text fontSize={16}>{userData.endereco.rua}</Text>
                    <Text fontSize={16}>{userData.endereco.cidade}</Text>
                    <Text fontSize={16}>{userData.endereco.uf}</Text>
                </AnimatedVStack>
            )}


        </AnimatedPressable>
    );
}

export default User;

