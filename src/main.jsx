import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import myCreatedRoutes from './Router/Route'
import AuthProvider from './Provider/AuthProvider'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   <RouterProvider router={myCreatedRoutes}></RouterProvider>

    </AuthProvider>
  </React.StrictMode>,
)
