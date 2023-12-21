import React from "react";

import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ILoginSchema, loginSchema} from "./schema";
import {loginUser} from "../../utilities/API/login";

import {LockKey, User} from "phosphor-react-native";

import {GlobalContext} from "../../context/GlobalContextProvider";
import {Center, Text, Icon, Input,} from "native-base";
import {AnimatedBox, AnimatedButton, AnimatedHStack, AnimatedText} from "../../style/Reanimated";
import {FadeIn} from "react-native-reanimated";



function Login() {
    let errorMessage = undefined
    const {control, handleSubmit, formState: {errors}, setError, clearErrors} = useForm<ILoginSchema>({
        resolver: zodResolver(loginSchema)
    })
    const {setUserData, getUserData} = React.useContext(GlobalContext)
    const [loading, setLoading] = React.useState<boolean>(false)
    const [isDelaying, setIsDelaying] = React.useState<boolean>(false)

    if(!loading && isDelaying){
        setIsDelaying(false)
    }

    console.log("renderizou")

    React.useEffect(()=>{
        setLoading(true)
        try{
            getUserData()
        }catch(e){
            throw e
        }finally{
            setLoading(false)
            setIsDelaying(false)
        }
    }, [])

    function onSubmit(data: ILoginSchema){
        setLoading(true)
        setTimeout(()=>{
            setIsDelaying(true)
        }, 5000)

        loginUser(data).then((response)=>{
            if(response){
                setUserData(response)
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
                isLoading={loading}
                entering={FadeIn.delay(300)}
                mt={5}
                w={"full"}
                p={5}
                bg={"white"}
                onPress={handleSubmit(onSubmit)}
                _pressed={{
                    backgroundColor: "blueGray.600"
                }}
            >
                <Text fontSize={18} color={"black"}>Entrar</Text>
            </AnimatedButton>

            {
                errorMessage && (
                    <AnimatedBox mt={5}
                                 entering={FadeIn}>
                        <Text color={"white"}
                              fontSize={18}>{errorMessage}</Text>
                    </AnimatedBox>
                )
            }

            {
                isDelaying && <AnimatedBox mt={5}
                                           entering={FadeIn}>
                    <Text color={"white"}
                          mb={-5}
                          fontSize={18}
                          textAlign={"center"}
                        >Demorando mais que o esperado.</Text>                    <Text color={"white"}
                          fontSize={18}
                          textAlign={"center"}
                        >Por favor, aguarde mais um pouco..</Text>
                </AnimatedBox>
            }
            {/*{loading === "delayed" && <Text my={5} color={"white"}> Demorando mais que o esperado, um momento..</Text>}*/}

        </Center>
    );
}

export default Login;