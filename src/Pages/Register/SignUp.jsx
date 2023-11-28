import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import img from '../../assets/signup img.png'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';




const SignUp = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const {createUser, googleLogin} = useAuth();

      const onSubmit = data => {console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser = result.user;
            toast.success('User created successfully')
        })
    };

    const handleSocial =()=>{
      googleLogin()
      .then(res=>{

        toast.success('Successfully signed up!')
      })
      .catch(error=>console.log(error))
    }

    const captachaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[]);

    // const handleLogin =event =>{
    //     event.preventDefault();
    //     const form = event.target;
    //     const email= form.email.value;
    //     const password= form.password.value;
    //     console.log(email , password);
    // }

    const handleValidateCaptcha = (e) =>{
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }else{
            setDisabled(true)
        }
    }

    return (
        <div className="min-h-screen bg-base-200 mt-10">
            <h1 className="text-2xl text-secondary text-center font-bold">Register now!</h1>
            <div className="flex flex-col md:flex-row items-center justify-around  mt-10 gap-4 md:gap-20">
                <div className='flex items-center justify-end w-1/2'>
                    
                    <img src={img} className='md:max-w-md' alt="sign up" />
                </div>

               

                    

                <form onSubmit={handleSubmit(onSubmit)} className=" md:w-1/3 mx-auto p-4">

  <div className="mb-5">
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your name
    </label>
    <input
      type="text"
      
      {...register("name", { required: true })}
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      placeholder="Judy Smith"
      required=""
      />
      {errors.name && <span className='text-red-600'>This field is required</span>}
  </div>

  <div className="mb-5">
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your email
    </label>
    <input
      type="email"
     
      {...register("email", { required: true })}
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      placeholder="name@gmail.com"
      required=""
    />
    {errors.email && <span className='text-red-600'>This field is required</span>}
  </div>

  <div className="mb-5">
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your password
    </label>
    <input
      type="password"
      
      {...register("password", {
        required:true,
        minLength: 6,
        maxLength: 20,
        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
        })}
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      required=""
    />
    {errors.password?.type === 'required' && <span className='text-red-600'>This field is required</span>}
    {errors.password?.type === 'minLength' && <span className='text-red-600'>Password should be more than 6 letters</span>}
    {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password should be less than 20 letters</span>}
    {errors.password?.type === 'pattern' && <span className='text-red-600'>Password should have 1 uppercase, 1 number and 1 special character</span>}
  </div>

  
    <div className="form-control mb-5">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha}  type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" required />
                           
                            
                        </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input
      
        type="checkbox"
        defaultValue=""
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
        required=""
      />
    </div>
    <label
      htmlFor="terms"
      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      I agree with the{" "}
      <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
        terms and conditions
      </a>
    </label>
  </div>
  <button
  disabled={disabled}
    type="submit"
    className={`text-white ${disabled ? 'bg-gray-600' : ' bg-blue-700 hover:bg-blue-800'} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
  >
    Register new account
  </button>
  <button
    onClick={handleSocial}
    className={`text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
  >
    Sign up with GOOGLE
  </button>
<div>

    <p className=''>Already have an account!</p>
     <Link className='text-blue-600' to='/login'> Sign in
</Link>
</div>
</form>



                   
                    
                
            </div>
        </div>
    );
};

export default SignUp;