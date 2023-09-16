import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import {ThemeProvider} from 'styled-components'
import defaultTheme from './themes/defaultTheme'
import {Provider} from 'react-redux'
import {store} from './store/store'


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)
root.render(
    <ThemeProvider theme={defaultTheme}>
      <React.StrictMode>
        <Provider store={store}>
          <App/>
        </Provider>
      </React.StrictMode>
    </ThemeProvider>,
)

