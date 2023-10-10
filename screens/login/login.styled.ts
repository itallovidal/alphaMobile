import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";
import {Animated} from "react-native";

export const Wrapper = styled(LinearGradient)`
    flex: 1;
    justify-content: center;
    padding: 15px;
`

export const Header = styled.View`
  margin-bottom: 16px;
`

export const HeaderTitle = styled.Text`
  color: white;
  font-size: 32px;
  text-align: center;
`

export const LoginForm = styled.View`
  gap: 16px;
`

export const FieldWrapper = styled.View`
 gap: 16px;
 flex-direction: row;
 align-items: center;
 background-color: ${({theme})=>theme.COLORS.PRIMARY};
 padding-left: 16px;
 border-radius: 6px;
`


export const FieldInput = styled.TextInput`
 padding: 16px 16px 16px 8px;
 flex: 1;
 color: white;
 font-size: 16px;
`

export const FormButton = styled.TouchableOpacity`
  padding: 16px;
  background-color: ${({theme})=>theme.COLORS.COLOR1};
  border-radius: 6px;
`

export const TextButton = styled.Text`
  text-align: center;
 color: white;
`

export const ErrorMessage = styled(Animated.Text)`
  margin-top: 16px;
  text-align: center;
  color: red;
  border-radius: 6px;
  overflow: hidden;
  font-size: 16px;
  width: 100%;
  background-color: white;
  padding: 16px;
 `