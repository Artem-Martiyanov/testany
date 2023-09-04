import "styled-components";
import {DefaultTheme} from "styled-components";

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      textPrimary: string,
      textSecondary: string,
      mainPrimary: string,
      mainSecondary: string,
      buttonPrimary: string,
      buttonSecondary: string
    },
    animationTransition: string,
    buttonDownOpacity: number,

    media: {
      tablet: string,
      desktop: string
    },
    containerWidth: {
      tablet: string,
      desktop: string
    }
    fontRoboto: string,
    indent: string,
  }
}

const defaultTheme: DefaultTheme = {
  colors: {
    textPrimary: '#1e1e1e',
    textSecondary: '#333333',
    mainPrimary: '#28efb3',
    mainSecondary: '#4ff5c4',
    buttonPrimary: '#b367f1',
    buttonSecondary: '#95f167'
  },
  buttonDownOpacity: 0.2,
  media: {
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1080px)'
  },
  containerWidth: {
    tablet: '700px',
    desktop: '1200px'
  },
  fontRoboto: '"Roboto", "Arial", sans-serif',
  indent: '20px',
  animationTransition: '0.15s ease'
}

export default defaultTheme

