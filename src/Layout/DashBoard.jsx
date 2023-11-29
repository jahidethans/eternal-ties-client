import toast from "react-hot-toast";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { CiEdit } from "react-icons/ci";
import { CiViewTimeline } from "react-icons/ci";
import { MdOutlineContactSupport } from "react-icons/md";
import { AiOutlineBarChart, AiOutlineCheckSquare, AiOutlineLike } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { FaUsers, FaWpforms } from "react-icons/fa";

const DashBoard = () => {
  const { user, logOut, setUser } = useAuth();
  const location = useLocation();

  // TODO: get is admin value from the database 
  const isAdmin = true;

  const handleLogout = () => {
    logOut();
    setUser({});
    toast.success('Logged out successfully');
  };

  const isLinkActive = (path) => {
    // Check if the current path starts with the given path
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-secondary">
        <div className="py-4 flex flex-col items-center space-y-3">
          <img
            className="w-8 h-8 mr-2 rounded-full"
            src={user.photoURL}
            alt="user photo"
          />
          <p className="text-sm">{user.displayName}</p>
          <p className="text-sm">{user.email}</p>
        </div>
        <hr className="h-px my-4 w-11/12 mx-auto bg-black border-0 dark:bg-gray-700"></hr>
        <ul>

          {
            isAdmin ?
              <>
                <li>
                  <NavLink
                    className={`flex items-center gap-3 ${isLinkActive("/dashboard/overview") ? "bg-primary text-white py-1 px-2 rounded-md" : ""
                      }`}
                    to="/dashboard/overview"
                  >
                    <AiOutlineBarChart  size={20}></AiOutlineBarChart >
                    <p>Overview </p>
                  </NavLink>
                </li>

                <li><NavLink className={`flex items-center gap-3 ${isLinkActive("/dashboard/manage") ? "bg-primary text-white py-1 px-2 rounded-md" : ""
                  }`} to="/dashboard/manage">
                  <FaUsers size={20}></FaUsers>
                  <p>Manage Users</p></NavLink></li>

                <li><NavLink className={`flex items-center gap-3 ${isLinkActive("/dashboard/aprovepremium") ? "bg-primary text-white py-1 px-2 rounded-md" 
                : ""
                  }`} to="/dashboard/aprovepremium">
                  <AiOutlineCheckSquare size={20}></AiOutlineCheckSquare>
                  <p>Approve Premium</p></NavLink></li>

                <li><NavLink className={`flex items-center gap-3 ${isLinkActive("/dashboard/contactreq") ? "bg-primary text-white py-1 px-2 rounded-md" : ""
                  }`} to="/dashboard/contactreq">
                  <AiOutlineLike size={20}></AiOutlineLike>
                  <p>Approved contact request</p></NavLink></li>
              </>
              :
              <>
                <li>
                  <NavLink
                    className={`flex items-center gap-3 ${isLinkActive("/dashboard/edit") ? "bg-primary text-white py-1 px-2 rounded-md" : ""
                      }`}
                    to="/dashboard/edit"
                  >
                    <CiEdit size={20}></CiEdit>
                    <p>Edit my biodata</p>
                  </NavLink>
                </li>

                <li><NavLink className={`flex items-center gap-3 ${isLinkActive("/dashboard/view") ? "bg-primary text-white py-1 px-2 rounded-md" : ""
                  }`} to="/dashboard/view">
                  <CiViewTimeline size={20}></CiViewTimeline>
                  <p>View my biodata</p></NavLink></li>

                <li><NavLink className={`flex items-center gap-3 ${isLinkActive("/dashboard/requests") ? "bg-primary text-white py-1 px-2 rounded-md" : ""
                  }`} to="/dashboard/requests">
                  <MdOutlineContactSupport size={20}></MdOutlineContactSupport>
                  <p>My contact requests</p></NavLink></li>

                <li><NavLink className={`flex items-center gap-3 ${isLinkActive("/dashboard/favourites") ? "bg-primary text-white py-1 px-2 rounded-md" : ""
                  }`} to="/dashboard/favourites">
                  <AiOutlineLike size={20}></AiOutlineLike>
                  <p>Favourites</p></NavLink></li>
              </>
          }



          <hr className="h-px my-4 w-11/12 mx-auto bg-black border-0 dark:bg-gray-700"></hr>

          <li><NavLink className='flex items-center gap-3' to="/">
            <IoHomeOutline size={20}></IoHomeOutline>
            <p>Home</p></NavLink></li>

          <li><NavLink className='flex items-center gap-3' to="/biodatas">
            <FaWpforms size={20}></FaWpforms>
            <p>Biodatas</p></NavLink></li>

          <hr className="h-px my-4 w-11/12 mx-auto bg-black border-0 dark:bg-gray-700"></hr>
          <li> <button
            onClick={handleLogout}
            className="block  px-4 py-2 text-sm text-black bg-none border-black hover:bg-primary hover:text-white"
          >
            Log Out
          </button></li>

        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;