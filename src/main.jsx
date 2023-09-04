import "./utils/darkMode";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Routes'
import { UserProvider } from './context/userContext'
import { SnackbarProvider } from "notistack";


ReactDOM.createRoot(document.getElementById('root')).render(
    <UserProvider>
        <SnackbarProvider autoHideDuration={2000} maxSnack={3} >
    <RouterProvider router={router} />
        </SnackbarProvider>
    </UserProvider>
)
