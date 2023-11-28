import React, { useState, useEffect } from "react";
import Biodata from "../../Components/Navbar/Biodata";

const Biodatas = () => {
  const [biodatas, setBiodatas] = useState([]);
  const [ageRange, setAgeRange] = useState([0, 100]); // Default age range
  const [biodataType, setBiodataType] = useState(""); // Default: All
  const [divisionFilter, setDivisionFilter] = useState(""); // Default: All

  useEffect(() => {
    // Fetch biodatas from the server with filters
    fetch(`http://localhost:5000/biodatas?minAge=${ageRange[0]}&maxAge=${ageRange[1]}&biodataType=${biodataType}&permanentDivision=${divisionFilter}`)
      .then((res) => res.json())
      .then((data) => setBiodatas(data));
  }, [ageRange, biodataType, divisionFilter]);

  console.log(biodatas);

  return (
    <div className="flex flex-col md:flex-row  w-full">
      {/* Filters */}
      <div className="md:w-1/6 space-y-7 my-5 px-4">
        <h2 className="text-secondary">Filter</h2>
        <div>
          <label htmlFor="ageRange">Age Range:</label>
          <input
            type="range"
            id="ageRange"
            min={0}
            max={100}
            value={ageRange[1]}
            onChange={(e) => setAgeRange([ageRange[0], parseInt(e.target.value)])}
          />
          <span>{ageRange[0]} - {ageRange[1]}</span>
        </div>
        <div>
          <label htmlFor="biodataType">Biodata Type:</label>
          <select id="biodataType" value={biodataType} onChange={(e) => setBiodataType(e.target.value)}>
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="divisionFilter">Division:</label>
          <select id="divisionFilter" value={divisionFilter} onChange={(e) => setDivisionFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Maymensingh">Maymensingh</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>
      </div>

      {/* Biodatas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:w-5/6 ">
        {biodatas.map((biodata) => (
          <Biodata key={biodata._id} biodata={biodata}></Biodata>
        ))}
      </div>
    </div>
  );
};

export default Biodatas;
