import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";
import SelectDropdown from 'react-native-select-dropdown'

export const HeaderWrapper = styled(LinearGradient)`
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  padding: 35px 25px 25px 25px;
  align-items: center;
  width: 100%;
`

export const Title = styled.Text`
  color: white;
  font-size: 24px;
`

export const FilterWrapper = styled(SelectDropdown)`
  flex-direction: row;
  align-items: center;
  gap: 16px;
  background-color: black;
`

export const SelectedFilter = styled.Text`
  color: white;
  font-size: 18px;
`