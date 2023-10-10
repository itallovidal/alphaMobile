
import {NavigationContainer} from "@react-navigation/native";
import AppRoutes from "./routes/appRoutes";
import {ThemeProvider} from "styled-components";
import {mainTheme} from "./styles/theme";
import GlobalContextProvider from "./context/GlobalContextProvider";

export default function App() {
  return (
          <GlobalContextProvider>
              <ThemeProvider theme={mainTheme}>
                      <NavigationContainer>
                          <AppRoutes/>
                      </NavigationContainer>
              </ThemeProvider>
          </GlobalContextProvider>

  );
}


