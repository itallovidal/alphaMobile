import React from 'react';
import {CaretDown, CaretUp} from "phosphor-react-native";
import {IRegisteredUsers} from "../list";
import {HStack, Pressable, VStack, Text} from "native-base";

interface IUserProps{
    userData: IRegisteredUsers
}

function User({userData} : IUserProps) {
    const [ isOpen, setIsOpen] = React.useState(false)

    return (
        <Pressable bg={"white"} p={5} rounded={5}>
            <Text fontSize={24} fontWeight={"bold"}>{userData.email}</Text>
            <HStack w={"full"} justifyContent={"space-between"}>
                <Text fontSize={18} mb={5}>{isOpen ? 'Fechar' : 'Ver informações'}</Text>
                { isOpen ? <CaretUp size={24} weight={"bold"}/> : <CaretDown size={24} weight={"bold"} />}
            </HStack>

            <VStack>
                <Text fontSize={16}>{userData.nome + ' ' + userData.sobrenome}</Text>
                <Text fontSize={16}>{userData.email}</Text>
                <Text fontSize={16}>{userData.endereco.cep}</Text>
                <Text fontSize={16}>{userData.endereco.bairro}</Text>
                <Text fontSize={16}>{userData.endereco.rua}</Text>
                <Text fontSize={16}>{userData.endereco.cidade}</Text>
                <Text fontSize={16}>{userData.endereco.uf}</Text>
            </VStack>

        </Pressable>
    );
}

export default User;

