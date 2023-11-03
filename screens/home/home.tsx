import {useFocusEffect, useNavigation} from "@react-navigation/native";
import React from 'react'

import {GlobalContext} from "../../context/GlobalContextProvider";
import {getUserCount} from "../../utilities/API/getUserCount";

import {VStack, Image, Box, Text, HStack, Pressable} from "native-base";


function Home() {
    const navigation = useNavigation()
    const {user} = React.useContext(GlobalContext)
    const [count, setCount] = React.useState(0)

    useFocusEffect(
        React.useCallback(() => {
            if(user.collection_id){
                getUserCount(user.collection_id).then((data)=>{
                    console.log(data)
                    setCount(data)
                })
            }
        }, [user.collection_id])
    );

    return (

        <VStack flex={1}>
            <Image alt={"QR Code"}
                   source={{uri: user.qrCode_image}}
                   h={400}
            />
            <Box p={5}
                 bg={{
                    linearGradient: {
                        colors: ['black', 'blueGray.600'],
                        start: [0.7, 0],
                    }}}>
                <Text fontSize={18} color={"white"}>Bem vindo, {user.nome}</Text>
            </Box>

            <VStack flex={1} p={5} bg={{
                linearGradient: {
                    colors: ['black', 'blueGray.600'],
                    start: [0.7, 0],
                }}}>

                <Pressable bg={"white"}
                        p={3}
                        rounded={5}
                        _pressed={{
                            backgroundColor: "gray.200"
                        }} onPress={()=> navigation.navigate('list')}>

                    <Text fontSize={24}
                          fontWeight={"bold"}
                          mb={3}
                    >Lista de Cadastros</Text>

                    <HStack  alignItems={"center"}
                             w={"full"}
                    >
                        <Text fontSize={16} flex={1}>Total: {count}</Text>
                        <Text fontSize={16}> Clique para Ver Mais </Text>
                    </HStack>
                </Pressable>

            </VStack>
        </VStack>
    );
}

export default Home;