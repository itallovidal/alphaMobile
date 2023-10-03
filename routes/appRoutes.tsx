import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/home/home";
import List from "../screens/list/list";
import Login from "../screens/login/login";
const {Navigator, Screen} = createNativeStackNavigator()
function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name={'login'} component={Login}/>
            <Screen name={'list'} component={List}/>
            <Screen name={'home'} component={Home}/>
        </Navigator>
    );
}

export default AppRoutes;