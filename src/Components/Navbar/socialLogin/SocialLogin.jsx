import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const SocialLogin = () => {

    const {googleLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result=>{
            const userInfo = {
              email: result.user?.email,
              name: result.user?.displayName,
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
              toast.success('Successfully signed up!');
              
            })
            navigate(location?.state ? location.state : '/');
            
        })
        .catch(error=>console.log(error));
    }

    return (
        <div>
            <button
    onClick={handleGoogleLogin}
    className={`text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
  >
    Sign up with GOOGLE
  </button>
        </div>
    );
};

export default SocialLogin;