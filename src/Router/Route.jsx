import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";
import Biodatas from "../Pages/Biodatas/Biodatas";
import BiodataDetail from "../Components/Navbar/BiodataDetail";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Favouite from "../Pages/Dashboard/favourite/Favouite";
import EditBiodata from "../Pages/Dashboard/favourite/EditBiodata";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ErrorPage from "../Components/ErrorElement/ErrorPage";
import ViewMyBiodata from "../Pages/Dashboard/favourite/ViewMyBiodata";
import ApprovePremium from "../Pages/Dashboard/ApprovePremium/ApprovePremium";



const myCreatedRoutes =  createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoute><BiodataDetail></BiodataDetail></PrivateRoute>,
                loader: ({ params }) =>
                  fetch(`http://localhost:5000/getbiodatabyid/${params.id}`)
              },

        ]
    },
    {
        path: 'dashboard',
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute> ,
        children:[
            {
                path: 'favourites',
                element: <Favouite></Favouite>
            },
            {
                path: 'edit',
                element: <EditBiodata></EditBiodata>
            },
            {
                path: 'view',
                element: <ViewMyBiodata></ViewMyBiodata>
            },


            //admin routes 
            {
                path: 'manage',
                element: <ManageUsers></ManageUsers>,
              
            },
            {
                path: 'aprovepremium',
                element: <ApprovePremium></ApprovePremium>,
                loader: ()=>fetch('http://localhost:5000/premiums')
              
            },
        ]
    }
])

export default myCreatedRoutes;