import {useFocusEffect, useNavigation} from "@react-navigation/native";
import React from 'react'

import {GlobalContext} from "../../context/GlobalContextProvider";
import {getUserCount} from "../../utilities/API/getUserCount";

import {VStack, Image, Box, Text, HStack, Pressable, Heading, Icon} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserPhoto from "../../components/userPhoto";
import {TouchableOpacity} from "react-native";
import {SignOut} from "phosphor-react-native";

import placeholderProfile from '../../assets/userPhotoDefault.png'


function Home() {
    const navigation = useNavigation()
    const {user, logOut} = React.useContext(GlobalContext)
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
            <HStack bg={{
                linearGradient: {
                    colors: ['black', 'blueGray.600'],
                    start: [0.7, 0],
                }}} pt={16}
                    pb={5}
                    px={8}
                    alignItems={"center"}>

                <UserPhoto size={16}
                           source={ {uri: user.profile_image} }
                           alt={""}
                           marginRight={5}
                />

                <VStack flex={1}>
                    <Text color={"gray.100"} fontSize={"md"}>Olá,</Text>
                    <Heading fontSize={"md"} color={"gray.100"}>{user.nome}</Heading>
                </VStack>

                <TouchableOpacity onPress={logOut}>
                    <SignOut size={32} color={"white"}/>
                </TouchableOpacity>

            </HStack>

            <Image alt={"QR Code"}
                   source={{uri: user.qrCode_image}}
                   h={400}
            />

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