import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import myCreatedRoutes from './Router/Route'
import AuthProvider from './Provider/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
   <RouterProvider router={myCreatedRoutes}></RouterProvider>
    </AuthProvider>
    </QueryClientProvider>
    
  </React.StrictMode>,
)
