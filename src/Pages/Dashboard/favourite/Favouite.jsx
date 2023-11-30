import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const Favouite = () => {
const [favourites, setFavourite] = useState([]);
const {user} = useAuth();
const [loading, setLoading] = useState(true);
const axiosSecure = useAxiosSecure();

useEffect(() => {
    fetch('http://localhost:5000/favourites')
      .then((response) => response.json())
      .then((data) => {
        // Filter the array based on favEmail with user.email
        const filteredFavourites = data.filter((fav) => fav.favEmail === user.email);

        // Set the filtered favourites in the state
        setFavourite(filteredFavourites);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching favourites:', error));
  }, [user.email]);

  console.log(favourites);

  const handleDeleteUser = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            
            axiosSecure.delete(`/favourites/${id._id}`)
            .then(res=>{
                if(res.data.deletedCount > 0){
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
                    
                }
            })
        }
      });
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
                       Name
                   </th>
                   <th scope="col" className="px-6 py-3">
                   Biodata Id
                   </th>
                   <th scope="col" className="px-6 py-3">
                   Permanent Address
                   </th>
                   <th scope="col" className="px-6 py-3">
                   Occupation
                   </th>
                   <th scope="col" className="px-6 py-3">
                       Action
                   </th>
               </tr>
           </thead>
           <tbody>
               {
                   favourites.map(each=> <tr key={each._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                   <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       {each.name}
                   </th>
                   <td className="px-6 py-4">
                      {each?.biodataId}
                   </td>
                   <td className="px-6 py-4">
                      {each.permanentDivision}
                   </td>
                   <td className="px-6 py-4">
                      {each.occupation}
                   </td>
                   <td className="px-6 py-4">
                       {each.role === 'admin' ? 'Admin' : <button onClick={()=> handleDeleteUser(each)} className="font-medium text-white hover:underline">Delete</button>}
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

export default Favouite;