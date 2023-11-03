import React from 'react'
import {useFocusEffect, useNavigation} from "@react-navigation/native";

import Dropdown from "./components/Dropdown";
import EmptyList from "./components/emptyList";
import User from "./components/user";

import {GlobalContext, IUser} from "../../context/GlobalContextProvider";
import {getAllRegisteredUsers} from "../../utilities/API/getAllRegisteredUsers";

import {VStack, Button, Text, HStack} from "native-base";
import Animated, {Layout, useAnimatedRef} from "react-native-reanimated";
import {FlatList} from "react-native";

interface IAddress{
    bairro: string,
    cep: string,
    cidade: string,
    rua: string,
    uf: string
}

export interface IRegisteredUsers{
    data_nascimento: string,
    email: string,
    endereco: IAddress,
    nome: string,
    sobrenome: string,
    telefone: string,
    id: string,
    created_at: {seconds: number}
}

function List() {
    const navigation = useNavigation()
    const [users, setUsers] = React.useState<IRegisteredUsers[]>([])
    const {user} = React.useContext(GlobalContext)
    const [page, setPage] = React.useState(0)
    const flatlistRef = React.useRef<Animated.FlatList<IRegisteredUsers>>(null)


    useFocusEffect(
        React.useCallback(() => {
            getAllRegisteredUsers(user.collection_id, page ).then((data)=>{
                setUsers((prev) => {
                    if(prev.length > 0){
                        return [...prev, ...data]
                    }

                    return data
                })

            })
        }, [page])
    );

    function onAdd(elIndex: number){
        if(elIndex > 0){
            if(flatlistRef.current){
                flatlistRef.current.scrollToIndex({animated: true, index: elIndex - 1})
            }
        }
    }

    return (
        <VStack bg={"blueGray.700"}
                flex={1}>

            <Dropdown/>

            <Animated.FlatList
                ref={flatlistRef}
                style={{
                    flex: 1,
                    padding: 10
                }}
                data={users}
                ListEmptyComponent={<EmptyList/>}
                itemLayoutAnimation={Layout.springify()}
                contentContainerStyle={{flexGrow: 1}}
                onContentSizeChange={()=> onAdd(users.length)}
                renderItem={({item, index} : {item: IRegisteredUsers, index: number})=>{
                    return <User index={index} key={item.id} userData={item}/>
                }}/>

            <HStack h={20}
                    w={"full"}
                    p={5}
                    justifyContent={"space-between"}
                    bg={{
                        linearGradient: {
                            colors: ['black', 'blueGray.600'],
                            start: [0.7, 0],
                        }
                    }}>

                <Button bg={"transparent"}
                        fontSize={24}
                        w={"45%"}
                        onPress={()=> navigation.goBack()}
                        _pressed={{
                            backgroundColor: "transparent",
                            opacity: .8
                        }}>
                    <Text fontSize={16}
                          fontWeight={"bold"}
                          color={"white"}>Voltar</Text>
                </Button>

                <Button bg={"transparent"}
                        w={"45%"}
                        _pressed={{
                            backgroundColor: "transparent",
                            opacity: .8
                        }}
                        onPress={()=> {
                            if(users)
                                setPage(users.at(-1)!.created_at.seconds)
                        }}>

                    <Text fontSize={16}
                          fontWeight={"bold"}
                          color={"white"}>Ver Mais</Text>
                </Button>
            </HStack>
        </VStack>
    );
}

export default List;
