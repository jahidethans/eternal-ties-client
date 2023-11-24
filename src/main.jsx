import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import myCreatedRoutes from './Router/Route'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={myCreatedRoutes}></RouterProvider>
  </React.StrictMode>,
)
