import {Image, IImageProps} from "native-base";

type Props = IImageProps & {
    size: number
}

function UserPhoto({size, ...props} : Props) {
    return (
        <Image h={size}
               w={size}
               rounded={"full"}
               borderWidth={2}
               borderColor={"gray.400"}
               {...props}
        />
    );
}

export default UserPhoto;