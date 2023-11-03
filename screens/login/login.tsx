import React from "react";
import {useFocusEffect, useNavigation} from "@react-navigation/native";

import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {IFormSchema, loginSchema} from "./schema";
import {loginUser} from "../../utilities/API/login";

import {LockKey, User} from "phosphor-react-native";
import {ActivityIndicator, Animated} from "react-native";

import {GlobalContext} from "../../context/GlobalContextProvider";
import {Center, Text, HStack, Icon, Input, Button, Box} from "native-base";
import {AnimatedBox, AnimatedButton, AnimatedCenter, AnimatedHStack, AnimatedText} from "../../style/Reanimated";
import {FadeIn} from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../components/loading/loading";



function Login() {
    let errorMessage = undefined
    const {control, handleSubmit, formState: {errors}, setError, clearErrors} = useForm<IFormSchema>({
        resolver: zodResolver(loginSchema)
    })
    const {setUserData, getUserData} = React.useContext(GlobalContext)
    const navigation = useNavigation()
    const [loading, setLoading] = React.useState<boolean>(false)

    React.useEffect(()=>{
        getUserData().then((data)=>{
            if(data){
                navigation.navigate("home")
            }
        })
    }, [])





    function onSubmit(data: IFormSchema){
        setLoading(true)

        loginUser(data).then((response)=>{

            if(response){
                setUserData(response)
                navigation.navigate("home")
            }
        }).catch((e)=>{
            clearErrors('loginError')
            setError('loginError', { type: 'manual', message: e.message });
        }).finally(()=>{
            setLoading(false)
        })
    }

    if(errors.email){
        errorMessage = errors.email.message
    }

    if(errors.password){
        errorMessage = errors.password.message
    }

    if(errors.email && errors.password){
        errorMessage = "Preencha todos os campos."
    }

    if(errors.loginError){
        errorMessage = "Usuário não existente no banco."
    }

    return (
        <Center
                p={5}
                flex={1}
                bg={{
                    linearGradient: {
                        colors: ['black', 'blueGray.600'],
                        start: [0.7, 0],
                    }
                }}
            >
            <AnimatedText
                entering={FadeIn}
                fontSize={32}
                fontWeight={"bold"}
                mb={5}
                color={"white"}
            >Login</AnimatedText>

            <AnimatedHStack p={3}
                    entering={FadeIn.delay(200)}
                    w={"full"}
                    alignItems={"center"}
                    bg={"blueGray.600"}
                    rounded={"md"}
                    mb={3}
            >
                <Icon as={<User color={"#ffffff"} size={32}/>}/>
                <Controller name={'email'}
                            control={control}
                            render={({field: {value, onChange}})=>{
                                return <Input onChangeText={onChange}
                                              value={value}
                                              placeholder={'joao@gmail.com'}
                                              placeholderTextColor={'gray.300'}
                                              flex={1}
                                              borderWidth={0}
                                              bg={"transparent"}
                                              color={"white"}
                                              fontSize={18}
                                              _focus={{
                                                  backgroundColor: "transparent"
                                              }}/>
                            }}/>
            </AnimatedHStack>

            <AnimatedHStack p={3}
                    entering={FadeIn.delay(200)}
                    w={"full"}
                    alignItems={"center"}
                    bg={"blueGray.600"}
                    rounded={"md"}>
                <Icon as={<LockKey color={"#ffffff"} size={32}/>}/>
                <Controller name={'password'}
                            control={control}
                            render={({field: {value, onChange}})=>{
                                return <Input secureTextEntry={true}
                                              value={value}
                                              onChangeText={onChange}
                                              placeholderTextColor={"gray.300"}
                                              placeholder={'Insira sua senha..'}
                                              flex={1}
                                              borderWidth={0}
                                              bg={"transparent"}
                                              color={"white"}
                                              fontSize={18}
                                              _focus={{
                                                  backgroundColor: "transparent"
                                              }}
                                />
                            }}/>
            </AnimatedHStack>

            <AnimatedButton
                entering={FadeIn.delay(300)}
                mt={5}
                w={"full"}
                p={5}
                bg={"blueGray.500"}
                onPress={handleSubmit(onSubmit)}
                _pressed={{
                    backgroundColor: "blueGray.600"
                }}
            >
                <Text fontSize={18} color={"white"}>Entrar</Text>
            </AnimatedButton>

            {
                errorMessage
                ?  <AnimatedBox mt={5}
                                entering={FadeIn}
                    >
                    <Text color={"white"}
                          fontSize={18}>{errorMessage}</Text>
                </AnimatedBox>
                : null
            }

            {/*{loading === "delayed" && <Text my={5} color={"white"}> Demorando mais que o esperado, um momento..</Text>}*/}

            {loading ? <Loading/> : null}
        </Center>
    );
}

export default Login;