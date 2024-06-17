import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from './routes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// MUI
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
    </ThemeProvider>
)
