
import {NavigationContainer} from "@react-navigation/native";
import AppRoutes from "./routes/appRoutes";
import {ThemeProvider} from "styled-components";
import {mainTheme} from "./styles/theme";

export default function App() {
  return (
      <ThemeProvider theme={mainTheme}>
          <NavigationContainer>
              <AppRoutes/>
          </NavigationContainer>
      </ThemeProvider>

  );
}


