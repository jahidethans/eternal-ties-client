import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    // const users = useLoaderData()
    const [loading, setLoading] = useState(false);

    const handleMakeAdmin = eachUser =>{
       
        axiosSecure.patch(`/users/admin/${eachUser._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                toast.success(`${eachUser.name} is an admin now.`)
            }
        })
    }

    return (
        <div>
             {loading && (
      <div className="flex items-center justify-center h-screen">
        <div className="loading loading-infinity text-secondary w-[8rem]">Loading</div>
      </div>
    )}

{!loading && (
    <div className="my-24">
        <div >
            <p className="text-xl font-semibold">Manage Users</p>
            <p className="text-gray-600 mt-4 mb-10">Choose an users role :</p>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(each=> <tr key={each._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {each.name}
                        </th>
                        <td className="px-6 py-4">
                           {each.email}
                        </td>
                        <td className="px-6 py-4">
                            {each.role === 'admin' ? 'Admin' : <button onClick={()=> handleMakeAdmin(each)} className="font-medium text-white hover:underline">Make admin</button>}
                        </td>
                    </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
        
    </div>
    )}
        </div>
        


    );
};

export default ManageUsers;