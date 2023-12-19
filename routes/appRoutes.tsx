import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/home/home";
import List from "../screens/list/list";
import Login from "../screens/login/login";
import {GlobalContext} from "../context/GlobalContextProvider";
const {Navigator, Screen} = createNativeStackNavigator()
function AppRoutes() {


    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name={'home'} component={Home}/>
            <Screen name={'list'} component={List}/>
        </Navigator>
    )
}

export default AppRoutes;