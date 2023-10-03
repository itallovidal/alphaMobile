import * as Styles from './button.styled'
import {CaretRight} from "phosphor-react-native";
import {WrapperSeeMore} from "./button.styled";
import {TouchableOpacityProps} from "react-native";

interface IButtonProps extends TouchableOpacityProps{
    children: string,
    message: string
}
function Button({children, message, ...props} : IButtonProps) {
    return (
        <Styles.Wrapper {...props}>
            <Styles.Title>{children}</Styles.Title>

            <Styles.WrapperInfo>
                <Styles.Span>{message}</Styles.Span>
                <Styles.WrapperSeeMore>
                    <Styles.Span>Ver mais</Styles.Span>
                    <CaretRight size={24} />
                </Styles.WrapperSeeMore>
            </Styles.WrapperInfo>
        </Styles.Wrapper>
    );
}

export default Button;