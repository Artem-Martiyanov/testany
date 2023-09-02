import "styled-components";
import {DefaultTheme} from "styled-components";

declare module 'styled-components' {
    interface DefaultTheme {
        colors: {
            textPrimary: string,
            textSecondary: string,
        },
        fontRoboto: string,
    }
}

const defaultTheme: DefaultTheme = {
    colors: {
        textPrimary: '#1e1e1e',
        textSecondary: '#333333'
    },
    fontRoboto: '"Roboto", "Arial", sans-serif',
}


export default defaultTheme

