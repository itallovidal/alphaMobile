import {NavigationContainer} from "@react-navigation/native";
import AppRoutes from "./routes/appRoutes";
import GlobalContextProvider from "./context/GlobalContextProvider";
import {NativeBaseProvider} from "native-base";
import {THEME} from "./style/theme";
import {LinearGradient} from "expo-linear-gradient";

const config = {
    dependencies: {
        'linear-gradient': LinearGradient
    }
};

export default function App() {
  return (
          <GlobalContextProvider>
              <NativeBaseProvider theme={THEME} config={config}>
                      <NavigationContainer>
                          <AppRoutes/>
                      </NavigationContainer>
              </NativeBaseProvider>
          </GlobalContextProvider>

  );
}


