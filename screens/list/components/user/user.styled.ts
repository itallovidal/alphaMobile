import styled from "styled-components/native";
import {Animated} from "react-native";

export const UserWrapper = styled.TouchableOpacity`
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 6px;
  margin-bottom: 16px;
`

export const Header = styled.View`
  
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`

export const Subtitle = styled.Text`
  font-size: 18px;
`

export const Body = styled(Animated.View)`
  overflow: hidden;
  //height: 100%;
  padding-top: 16px;
`

export const Span = styled.Text`
  font-size: 18px;
`

export const UserInfo = styled.Text`
  font-size: 18px;
`

export const SubtitleWrapper = styled.View`
  flex-direction: row;
  justify-content:space-between;
  gap: 24px;
  align-items: center;
`