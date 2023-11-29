import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { MdLibraryAdd } from "react-icons/md";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const BiodataDetail = () => {
  const biodata = useLoaderData();
  const [biodatas, setBiodatas] = useState([]);

  const {user} = useAuth();
  
  const {_id, biodataType, image, name, contactEmail, dateOfBirth, expectedPartnerHeight, expectedPartnerWeight, fathersName, height, mobileNumber, mothersName, occupation, permanentDivision, presentDivision, race, weight, age } = biodata;
  const axiosSecure = useAxiosSecure()
 
  
 
  

  const handleAddFav = async (biodata) => {
    const favItem = {
      favItemId: _id,
      favEmail: user.email,
      biodataType, image, name, contactEmail, dateOfBirth, expectedPartnerHeight, expectedPartnerWeight, fathersName, height, mobileNumber, mothersName, occupation, permanentDivision, presentDivision, race, weight, age
    }
    
    axiosSecure.post('/favourites', favItem)
    .then(res => {
      console.log(res.data);
      if(res.data.insertedId){
        toast.success('Added to favourites')
      }
    })
    console.log(favItem);
  };
  
  
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Fetch biodatas from the server with filters
    fetch(`http://localhost:5000/biodatas?biodataType=${biodata.biodataType}`)
      .then((res) => res.json())
      .then((data) => setBiodatas(data));
  }, [biodata.biodataType]);




    return (
        <div className="flex flex-col gap-3 md:flex-row container mx-auto">
<div className="bg-gray-100 p-8 rounded-md shadow-md container mx-auto md:w-3/6 my-4">
       
<div className="flex justify-between">
      <h2 className="text-2xl font-bold mb-4">{biodataType === 'male' ? 'Mr.' : 'Ms.'} {name}</h2>
      <div className="cursor-pointer" onClick={()=>handleAddFav(biodata)}><MdLibraryAdd size={20}/></div>
      </div>
       <img src={image} alt={name} className="w-full max-h-[800px] object-cover mb-4 rounded-md" />
 
       <div className="mb-2">
         <strong>Date of Birth:</strong> {dateOfBirth}
       </div>
       <div className="mb-2">
         <strong>Height:</strong> {height}
       </div>
       <div className="mb-2">
         <strong>Weight:</strong> {weight}
       </div>
       <div className="mb-2">
         <strong>Age:</strong> {age}
       </div>
       <div className="mb-2">
         <strong>Occupation:</strong> {occupation}
       </div>
       <div className="mb-2">
         <strong>Race:</strong> {race}
       </div>
       <div className="mb-2">
         <strong>Father's Name:</strong> {fathersName}
       </div>
       <div className="mb-2">
         <strong>Mother's Name:</strong> {mothersName}
       </div>
       <div className="mb-2">
         <strong>Expected Partner Height:</strong> {expectedPartnerHeight}
       </div>
       <div className="mb-2">
         <strong>Expected Partner Weight:</strong> {expectedPartnerWeight}
       </div>
       <div className="mb-2">
         <strong>Permanent Division:</strong> {permanentDivision}
       </div>
       <div className="mb-2">
         <strong>Present Division:</strong> {presentDivision}
       </div>
       <div className="mb-2">
         <strong>Contact Email:</strong> {contactEmail}
       </div>
       
       <div>
         <strong>Mobile Number:</strong> {mobileNumber}
       </div>
     </div>
          <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 md:w-3/6 container mx-auto">
            {
            biodatas.map(each=> 
              <div key={each._id} className="container mx-auto" >
             <div className="bg-gray-100 p-8 rounded-md shadow-md max-w-md mx-auto my-4">
      <div className="flex justify-between">
      <h2 className="text-2xl font-bold mb-4">{each.biodataType === 'male' ? 'Mr.' : 'Ms.'} {each.name}</h2>
      <h2 className="text-base">1</h2>
      </div>
      <img src={each.image} alt={each.name} className="h-64 w-96 object-cover mb-4 rounded-md" />

      
      <div className="flex justify-between items-end">
      <div><div className="mb-2">
        <strong>Age:</strong> {each.age}
      </div>
      <div className="mb-2">
        <strong>Occupation:</strong> {each.occupation}
      </div>
      
      <div className="mb-2">
        <strong>Permanent Division:</strong> {each.permanentDivision}
      </div></div>
      <Link to={`/biodatas/${each._id}`}><button className="h-fill " onClick={scrollToTop}>View details</button></Link>
      </div>
      
      
    </div>
        </div>
              )
            }
          </div>

        </div>
    );
};

export default BiodataDetail;