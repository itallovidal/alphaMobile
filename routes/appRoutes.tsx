import React from 'react';
import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import Home from "../screens/home/home";
import List from "../screens/list/list";
import Profile from "../screens/profile/profile";

type TAppRoute = {
    home: undefined,
    list: undefined,
    profile: undefined
}


export type TAppRouteNavigator = NativeStackNavigationProp<TAppRoute>

const {Navigator, Screen} = createNativeStackNavigator<TAppRoute>()




function AppRoutes() {


    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name={'home'} component={Home}/>
            <Screen name={'list'} component={List}/>
            <Screen name={'profile'} component={Profile}/>
        </Navigator>
    )
}

export default AppRoutes;