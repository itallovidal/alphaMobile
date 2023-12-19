import React from 'react';
import Login from "../screens/login/login";
import AppRoutes from "./appRoutes";
import {GlobalContext} from "../context/GlobalContextProvider";

function Index() {
    const {user} = React.useContext(GlobalContext)

    return user.id === undefined ? <Login/> : <AppRoutes/>;
}

export default Index;