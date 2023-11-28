import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";
import Biodatas from "../Pages/Biodatas/Biodatas";
import BiodataDetail from "../Components/Navbar/BiodataDetail";



const myCreatedRoutes =  createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/biodatas',
                element: <Biodatas></Biodatas>
            },
            {
                path: '/biodatas/:id',
                element: <BiodataDetail></BiodataDetail>,
                loader: ({ params }) =>
                  fetch(`http://localhost:5000/biodatas/${params.id}`)
              },

        ]
    }
])

export default myCreatedRoutes;