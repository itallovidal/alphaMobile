import {NavigationContainer} from "@react-navigation/native";
import AppRoutes from "./routes/appRoutes";
import GlobalContextProvider, {GlobalContext} from "./context/GlobalContextProvider";
import {NativeBaseProvider} from "native-base";
import {THEME} from "./style/theme";
import {LinearGradient} from "expo-linear-gradient";
import Login from "./screens/login/login";
import React from "react";
import Index from "./routes";
import {StatusBar} from "react-native";

const config = {
    dependencies: {
        'linear-gradient': LinearGradient
    }
};

export default function App() {

    return (
          <GlobalContextProvider>
            <StatusBar translucent={true}  />
              <NativeBaseProvider theme={THEME} config={config}>
                      <NavigationContainer>
                          <Index/>
                      </NavigationContainer>
              </NativeBaseProvider>
          </GlobalContextProvider>
    );
}


