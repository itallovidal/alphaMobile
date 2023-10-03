import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";

export const Footer = styled(LinearGradient)`
  height: 80px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
`

export const BackButton = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`

export const ScreenWrapper = styled(LinearGradient)`
  flex: 1;
`

export const List = styled.FlatList`
  padding: 15px;
  margin-bottom: 15px;
`