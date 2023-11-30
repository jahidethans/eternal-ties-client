import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ApprovePremium = () => {
    const [loading, setLoading] = useState(false);
   


    const axiosSecure = useAxiosSecure();
    const {refetch, data: requesters = []} = useQuery({
        queryKey: ['premiums'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/premiums');
            return res.data;
        }
    })


    const handleMakePremium =(email)=>{
        console.log(email);
        axiosSecure.patch(`/acceptPremium/${email}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `The user is an premium now.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
               
            }
        })
    }

    return (
        <div>
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
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Biodata Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Role
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        requesters.map(each=> <tr key={each._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {each.name}
                        </th>
                        <td className="px-6 py-4">
                           {each.contactEmail}
                        </td>
                        <td className="px-6 py-4">
                           {each.BiodataId}
                        </td>
                        <td className="px-6 py-4">
                            {each.status === 'premium' ? 'premium' : <button onClick={()=> handleMakePremium(each.contactEmail)} className="font-medium text-white hover:underline">Make Premium</button>}
                        </td>
                    </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
        
    </div>
    )}
        </div>
        </div>
    );
};

export default ApprovePremium;