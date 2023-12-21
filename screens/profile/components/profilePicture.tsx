import React from 'react';
import {Button, Center, Image, Text} from "native-base";

function ProfilePicture({picture}: {picture: string}) {
    return (
        <Center>
            <Image
                   borderRadius={"full"}
                   mt={60}
                   h={150}
                   w={150}
                   alt={"imagem de perfil"}
                   source={{uri: picture}}
            />

            {/*<Button variant={"unstyled"}>*/}
            {/*    <Text color={"white"}*/}
            {/*          fontWeight={"bold"}*/}
            {/*          fontSize={20}>Alterar</Text>*/}
            {/*</Button>*/}


        </Center>
    )
}

export default ProfilePicture;