import React from 'react';
import {Text, Image, Center} from "native-base";
import emptyIcon from '../../../assets/listEmptyIcon.png'

function EmptyList() {
    return (
        <Center opacity={.8}>
            <Text fontWeight={"bold"} color={"white"} fontSize={36}>Sem registros.</Text>
            <Text color={"white"} fontSize={16} mb={5}>Por enquanto nada por aqui..</Text>
            <Image alt={""}
                   h={20}
                   resizeMode={"contain"}
                   source={emptyIcon}/>
        </Center>
    );
}

export default EmptyList;