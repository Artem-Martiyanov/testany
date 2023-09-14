import * as React from "react";
import App from "./components/app/App";
import * as ReactDom from "react-dom/client";
import {ThemeProvider} from "styled-components";
import defaultTheme from "./themes/defaultTheme";
import {Provider} from "react-redux";
import {store} from "./store/store";


const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <ThemeProvider theme={defaultTheme}>
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
)
