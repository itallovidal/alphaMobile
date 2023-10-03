import 'styled-components/native'
import {mainTheme} from "./theme";

type MyTheme = typeof mainTheme

declare module 'styled-components/native'{
    export interface DefaultTheme extends MyTheme{}
}
