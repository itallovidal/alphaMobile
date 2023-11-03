import React from "react";
import {useNavigation} from "@react-navigation/native";

import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {IFormSchema, loginSchema} from "./schema";
import {loginUser} from "../../utilities/API/login";

import {LockKey, User} from "phosphor-react-native";
import {ActivityIndicator, Animated} from "react-native";

import {GlobalContext} from "../../context/GlobalContextProvider";
import {Center, Text, HStack, Icon, Input, Button, Box} from "native-base";



function Login() {
    let errorMessage = undefined
    const {control, handleSubmit, formState: {errors}, setError, clearErrors} = useForm<IFormSchema>({
        resolver: zodResolver(loginSchema)
    })
    const {setUserData, getUserData} = React.useContext(GlobalContext)
    const navigation = useNavigation()
    const opacityValue: Animated.Value = React.useRef(new Animated.Value(0.0)).current
    const [loading, setLoading] = React.useState(false)

    React.useEffect(()=>{
        getUserData().then((data)=>{
            if(data){
                navigation.navigate("home")
            }
        })
    }, [])

    function handleAnimation(ref: Animated.Value, setting : "show" | "hide"){
        if(setting === "show"){
            Animated.timing(ref, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false
            }).start()
        }

        if(setting === "hide"){
            Animated.timing(ref, {
                toValue: 0.0,
                duration: 500,
                useNativeDriver: false
            }).start()
        }
    }

    React.useEffect(()=>{
        if(errors.email || errors.loginError || errors.password){
            handleAnimation(opacityValue, "show")
        }
        else{
            handleAnimation(opacityValue, "hide")
        }
    }, [errors.email, errors.password, errors.loginError])

    function onSubmit(data: IFormSchema){
        setLoading(true)
        loginUser(data).then((response)=>{
            setLoading(false)
            if(response){
                setUserData(response)
                navigation.navigate("home")
            }
        }).catch((e)=>{
            setLoading(false)
            clearErrors('loginError')
            setError('loginError', { type: 'manual', message: e.message });
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
        <Center p={5}
                flex={1}
                bg={{
                    linearGradient: {
                        colors: ['black', 'blueGray.600'],
                        start: [0.7, 0],
                    }
                }}
            >
            <Text fontSize={32}
                  fontWeight={"bold"}
                  mb={5}
                  color={"white"}
            >Login</Text>
            <HStack p={3}
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
            </HStack>

            <HStack p={3}
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
            </HStack>
            <Button mt={5}
                    w={"full"}
                    p={5}
                    bg={"blueGray.500"}
                    onPress={handleSubmit(onSubmit)}
                    _pressed={{
                        backgroundColor: "blueGray.600"
                    }}
            >
                <Text fontSize={18} color={"white"}>Entrar</Text>
            </Button>

            {
                errorMessage
                ?  <Box mt={5}>
                    <Text color={"white"}
                          fontSize={18}>{errorMessage}</Text>
                </Box>
                : null
            }

            {loading ? <ActivityIndicator style={{marginTop: 24}} size={'large'} color={'#ffffff'}/> : null}
        </Center>
    );
}

export default Login;