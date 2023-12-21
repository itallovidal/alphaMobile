import React from 'react';
import {Heading, ScrollView, SectionList, Text, useToast, VStack} from "native-base";
import { AnimatedButton, AnimatedText} from "../../style/Reanimated";
import {FadeIn} from "react-native-reanimated";
import {Controller, useForm} from "react-hook-form";
import {editUserSchema, IEditUserSchema} from "../login/schema";
import {zodResolver} from "@hookform/resolvers/zod";
// import {GlobalContext} from "../../context/GlobalContextProvider";
import InputWithIcon from "./components/InputWithIcon";
import {GlobalContext} from "../../context/GlobalContextProvider";
import ProfilePicture from "./components/profilePicture";
import {api} from "../../utilities/axiosConfig";


const fields = [
    {
        title: 'Geral',
        data: ['nome', 'senha', "senhaConfirma", 'telefone']
    },
    {
        title: 'Redes Sociais',
        data: ['facebook', 'instagram', 'youtube', 'linkedin', 'siteInstitucional']
    },
    {
        title: 'Partido',
        data: ['partido_nome', 'partido_sigla']
    },
]








function Profile() {
    const {user, setUserData} = React.useContext(GlobalContext)
    const toast = useToast()

    const {
        control,
        handleSubmit,
        formState: {errors},
        } = useForm<IEditUserSchema>({
        resolver: zodResolver(editUserSchema),
        defaultValues: {
            facebook: user.facebook ? user.facebook : undefined,
            instagram: user.instagram ? user.instagram : undefined,
            linkedin: user.linkedin ? user.linkedin : undefined,
            youtube: user.youtube ? user.youtube : undefined,
            siteInstitucional: user.siteInstitucional ? user.siteInstitucional : undefined,
            telefone: user.telefone,
            senha: user.senha,
            senhaConfirma: user.senha,
            nome: user.nome,
            partido_nome: "indisponível",
            partido_sigla: "indisponível",
        }
    })

    const [loading, setLoading] = React.useState<boolean>(false)

    async function submit(newInfo: IEditUserSchema){
        setLoading(true)
        try {
            // /updateData/:id
            const response = await api.put(`/politics/updateData/${user.collection_id}`, {
                ...newInfo,
                email: user.email,
                id: user.id
            })

            if(response.status === 202){
                console.log("perfeito.Atualizado.")

                setUserData(response.data)

                toast.show({
                    bgColor: "green.700",
                    title: "Sucesso! Informações atualizadas.",
                    placement: "top"
                })
            }
        }catch (e){
            console.log(e)
            toast.show({
                bgColor: "red.500",
                title: "Erro na atualização. Tente novamente mais tarde.",
                placement: "top"
            })
        }finally {
            setLoading(false)
        }

    }

    return (
            <VStack bg={{
                linearGradient: {
                    colors: ['black', 'blueGray.600'],
                    start: [0.7, 0],
                }
            }}  flex={1}  p={5}>


                <SectionList sections={fields}
                             ListHeaderComponent={<ProfilePicture picture={user.profile_image}/>}

                             renderSectionHeader={({section})=> {
                                 return (
                                     <Heading my={4} color={"white"}>{section.title}</Heading>
                                 )
                             }}
                             keyExtractor={(item)=> item}
                             renderItem={({item})=>{
                                 return (
                                     <Controller name={item as keyof IEditUserSchema}
                                                 control={control}
                                                 render={({field: {value, onChange, onBlur}})=>{
                                                     return <InputWithIcon onChangeText={onChange}
                                                                           value={value}
                                                                           errorMessage={errors[item as keyof IEditUserSchema]?.message}
                                                                           onBlur={onBlur}
                                                                           media={item as keyof IEditUserSchema}
                                                     />
                                     }}/>
                                 )
                             }}

                />

            <AnimatedButton
                isLoading={loading}
                entering={FadeIn.delay(300)}
                mt={5}
                w={"full"}
                p={5}
                bg={"white"}
                onPress={handleSubmit(submit)}
                _pressed={{
                    backgroundColor: "blueGray.200"
                }}>
                <Text fontSize={18} color={"black"}>Modificar Informações</Text>
            </AnimatedButton>
        </VStack>
    );
}

export default Profile;