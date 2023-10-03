import * as Styles from './login.styled'
import {useTheme} from "styled-components/native";
import {useForm, Controller} from "react-hook-form";
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {LockKey, User} from "phosphor-react-native";
import React, {useRef} from "react";
import {Animated} from "react-native";
import {loginUser} from "../../utilities/API/login";

const schema = z.object({
    name: z.string({
        required_error: 'Por favor, preencha o campo'
    }).min(3, {message: 'Campo nome possui mínimo de 3 caracteres.'}),
    password: z.string({
        required_error: 'Por favor, preencha o campo'
    }).min(6, {message: 'Campo senha possui mínimo de 6 caracteres.'})
})

interface IFormSchema extends z.infer<typeof schema>{}



function Login() {
    const theme = useTheme()
    const {control, handleSubmit, formState: {errors}} = useForm<IFormSchema>({
        resolver: zodResolver(schema)
    })
    const nameOpacity: Animated.Value = useRef(new Animated.Value(0.0)).current
    const passwordOpacity: Animated.Value = useRef(new Animated.Value(0.0)).current


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
        if(errors.name){
            handleAnimation(nameOpacity, "show")
        }
        else{
            handleAnimation(nameOpacity, "hide")
        }
        if(errors.password){
            handleAnimation(passwordOpacity, "show")
        }
        else{
            handleAnimation(passwordOpacity, "hide")
        }
    }, [errors.name, errors.password])


    function onSubmit(data: IFormSchema){
        loginUser(data)
    }

    return (
        <Styles.Wrapper colors={[...theme.COLORS.GRADIENT]}>

            <Styles.Header>
                <Styles.HeaderTitle>Login</Styles.HeaderTitle>
            </Styles.Header>

            <Styles.LoginForm>

                <Styles.FieldWrapper>
                    <User size={32} color={'white'}/>

                    <Controller
                        name={'name'}
                        control={control}
                        render={({field: {value, onChange}})=>{
                        return <Styles.FieldInput
                            value={value}
                            onChangeText={onChange}
                            placeholder={'JoãoSilva'}
                            placeholderTextColor={'#394867'}
                        />
                    }}/>
                </Styles.FieldWrapper>


                <Styles.FieldWrapper>
                    <LockKey size={32} color={'white'}/>
                    <Controller
                        name={'password'}
                        control={control}
                        render={({field: {value, onChange}})=>{
                            return <Styles.FieldInput
                                secureTextEntry={true}
                                value={value}
                                onChangeText={onChange}
                                placeholderTextColor={'#394867'}    placeholder={'Insira sua senha..'}
                            />
                        }}/>
                </Styles.FieldWrapper>

                <Styles.FormButton onPress={handleSubmit(onSubmit)}><Styles.TextButton>Entrar</Styles.TextButton></Styles.FormButton>
            </Styles.LoginForm>

            <Styles.ErrorMessage style={{opacity: nameOpacity}}>{
                errors.name && errors.name.message
            }</Styles.ErrorMessage>

            <Styles.ErrorMessage style={{opacity: passwordOpacity}}>{
                errors.password ? errors.password.message : "Verificando.."
            }</Styles.ErrorMessage>
        </Styles.Wrapper>
    );
}

export default Login;