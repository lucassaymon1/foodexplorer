import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthRoutes } from './Routes/auth.routes.jsx'
import { AppRoutes } from './Routes/app.routes.jsx'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import GlobalStyle from "../styles/global.js"
import theme from "../styles/theme.js"

ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>

  </ThemeProvider>
)
