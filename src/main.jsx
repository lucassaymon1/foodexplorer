import { Provider } from "./Components/ui/provider.jsx"
import GlobalStyle from "../styles/global.js"
import {theme} from "../styles/theme.js"
import { ThemeProvider } from 'styled-components'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes } from './Routes/index.jsx'
import { AuthProvider } from './hooks/auth.jsx'
import { CartProvider } from "./hooks/cart.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider >
        <AuthProvider>
          <CartProvider>
            <Routes />
          </CartProvider>

        </AuthProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
