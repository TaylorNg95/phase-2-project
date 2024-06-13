import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'

import routes from './routes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />)
