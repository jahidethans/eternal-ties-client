import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const ViewMyBiodata = () => {

    const [biodata, setBiodata] = useState({});
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic() 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your server URL
        const response = await axiosPublic.get(`http://localhost:5000/biodatas/${user.email}`);
        setBiodata(response.data);
      } catch (error) {
        console.error('Error fetching biodata:', error);
      }
    };
    

    fetchData();
  }, [user.email]);

  const {_id, biodataType, image, name, contactEmail, dateOfBirth, expectedPartnerHeight, expectedPartnerWeight, fathersName, height, mobileNumber, mothersName, occupation, permanentDivision, presentDivision, race, weight, age, BiodataId } = biodata;

  const handleRequestPremium =()=>{
    
  }

  

    return (
        <div className="flex flex-col gap-3 md:flex-row container mx-auto">
<div className="bg-gray-100 p-8 rounded-md shadow-md container mx-auto md:w-3/6 my-4">
       
<div className="flex justify-between">
      <h2 className="text-2xl font-bold mb-4">{biodataType === 'male' ? 'Ms.' : 'Mr.'} {name}</h2>
      <h2>{BiodataId}</h2>
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
        <div >
            <button onClick={handleRequestPremium} type="submit" className="mt-2 bg-white border-2 border-primary text-black hover:bg-primary hover:text-white">
                Make biodata premium
            </button>
            </div>  
     </div>
        
        </div>
    );
};

export default ViewMyBiodata;