
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div><Outlet></Outlet></div>
            {/* footer */}
            <Toaster />
        </div>
    );
};

export default MainLayout;