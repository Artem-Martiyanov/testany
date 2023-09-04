import * as React from "react";
import App from "./components/app/App";
import * as ReactDom from "react-dom/client";
import {ThemeProvider} from "styled-components";
import defaultTheme from "./themes/defaultTheme";


const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <ThemeProvider theme={defaultTheme}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </ThemeProvider>
)




