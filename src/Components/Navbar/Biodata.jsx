import { Link } from "react-router-dom";


const Biodata = ({biodata}) => {
  
  const {_id, biodataType, image, name, contactEmail, dateOfBirth, expectedPartnerHeight, expectedPartnerWeight, fathersName, height, mobileNumber, mothersName, occupation, permanentDivision, presentDivision, race, weight, age } = biodata;

    return (
        <div>
             <div className="bg-gray-100 p-8 rounded-md shadow-md max-w-md mx-auto my-4">
      <div className="flex justify-between">
      <h2 className="text-2xl font-bold mb-4">{biodataType === 'male' ? 'Mr.' : 'Ms.'} {name}</h2>
      <h2 className="text-base">1</h2>
      </div>
      <img src={image} alt={name} className="h-64 w-96 object-cover mb-4 rounded-md" />

      
      <div className="flex justify-between items-end">
      <div><div className="mb-2">
        <strong>Age:</strong> {age}
      </div>
      <div className="mb-2">
        <strong>Occupation:</strong> {occupation}
      </div>
      
      <div className="mb-2">
        <strong>Permanent Division:</strong> {permanentDivision}
      </div></div>
      <Link to={`/biodatas/${_id}`}><button className="h-12 ">View details</button></Link>
      </div>
      
      
    </div>
        </div>
    );
};

export default Biodata;