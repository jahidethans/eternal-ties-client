
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div><Outlet></Outlet></div>
            {/* footer */}
        </div>
    );
};

export default MainLayout;