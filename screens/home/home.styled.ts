import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const QrCodeWrapper = styled.View`
  width: 100%;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Label = styled(LinearGradient)`
  align-self: flex-start;
  padding: 16px;
background-color: ${({theme})=> theme.COLORS.PRIMARY};
  color: white;
`

export const Nav = styled(LinearGradient)`
  gap: 16px;
  //padding: 16px;
  flex: 1;
  width: 100%;
`

export const WrapperLogo = styled.View`
  padding: 15px;
  align-self: center;
`
