import { axiosSecure } from "../Hooks/useAxiosSecure"


export const saveUser = async user=>{
    const currentUser ={
        email: user.email,
        status: 'basic',
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    
    return data
}