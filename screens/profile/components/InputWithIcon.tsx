import React from 'react';
import {FadeIn} from "react-native-reanimated";
import {Icon, IInputProps, Input, Text, VStack} from "native-base";
import {
    FacebookLogo,
    Globe,
    InstagramLogo,
    LinkedinLogo, Lock,
    Phone,
    User,
    Users,
    YoutubeLogo
} from "phosphor-react-native";
import {AnimatedHStack} from "../../../style/Reanimated";
import {IEditUserSchema} from "../../login/schema";
import {z} from "zod";

interface InputProps extends IInputProps{
    media: keyof IEditUserSchema,
    errorMessage: string | undefined
}

const socialMediaMap = {
    "youtube": <Icon as={<YoutubeLogo color={"#ffffff"} weight={"fill"} size={32}/>}/>,
    "linkedin": <Icon as={<LinkedinLogo  color={"#ffffff"} weight={"fill"} size={32}/>}/>,
    "siteInstitucional": <Icon as={<Globe  color={"#ffffff"} size={32}/>}/>,
    "facebook": <Icon as={<FacebookLogo color={"#ffffff"} weight={"fill"} size={32}/>}/>,
    "instagram": <Icon as={<InstagramLogo color={"#ffffff"} weight={"fill"} size={32}/>}/>,
    "senha": <Icon as={<Lock  color={"#ffffff"} weight={"fill"} size={32}/>}/>,
    "senhaConfirma": <Icon as={<Lock  color={"#ffffff"} weight={"fill"} size={32}/>}/>,
    "telefone": <Icon as={<Phone  color={"#ffffff"} weight={"fill"} size={32}/>}/>,
    "nome": <Icon as={<User color={"#ffffff"} weight={"fill"} size={32}/>}/>,
    "partido_nome": <Icon as={<Users  color={"#ffffff"} weight={"fill"} size={32}/>}/>,
    "partido_sigla": <Icon as={<Users  color={"#ffffff"} weight={"fill"} size={32}/>}/>,
}


function InputWithIcon({media, errorMessage, ...props} : InputProps) {
    return (
    <VStack>
        <AnimatedHStack p={3}
                        entering={FadeIn.delay(200)}
                        w={"full"}
                        alignItems={"center"}
                        bg={"blueGray.600"}
                        rounded={"md"}
                        mb={3}
        >
            {socialMediaMap[media]}
            <Input {...props}
                    isDisabled={media === "partido_sigla" || media === "partido_nome"}
                   flex={1}
                   secureTextEntry={media === "senha" || media === "senhaConfirma"}
                   borderWidth={0}
                   color={"white"}
                   bg={"transparent"}
                   fontSize={18}
                   placeholderTextColor={'gray.300'}
                   _focus={{
                       backgroundColor: "transparent"
                   }}/>
        </AnimatedHStack>
        {
            errorMessage && <Text color={"red.500"} mb={6}>{errorMessage}</Text>
        }
    </VStack>
    );
}

export default InputWithIcon;