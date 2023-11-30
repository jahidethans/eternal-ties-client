import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
const axiosPublic = useAxiosPublic();


const SuccessCounter = () => {
    const [counters, setCounters] = useState({
        totalBiodataCount: 0,
        maleBiodataCount: 0,
        femaleBiodataCount: 0,
        completedMarriagesCount: 0,
      });
    
      useEffect(() => {
        // Fetch success counters from the server
        axiosPublic.get('/successCounter')
          .then(response => setCounters(response.data))
          .catch(error => console.error('Error fetching success counters:', error));
      }, []); // Run the effect only once on component mount
    
      return (
        <section className="bg-gray-200 py-16 my-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Success Counter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Total Biodata Counter */}
              <div className="counter-item">
                <h3 className="text-4xl font-bold text-blue-500">{counters.totalBiodataCount}</h3>
                <p className="text-gray-600">Total Biodata</p>
              </div>
    
              {/* Male Biodata Counter */}
              <div className="counter-item">
                <h3 className="text-4xl font-bold text-pink-500">{counters.maleBiodataCount}</h3>
                <p className="text-gray-600">Male Biodata</p>
              </div>
    
              {/* Female Biodata Counter */}
              <div className="counter-item">
                <h3 className="text-4xl font-bold text-purple-500">{counters.femaleBiodataCount}</h3>
                <p className="text-gray-600">Female Biodata</p>
              </div>
    
              {/* Completed Marriages Counter */}
              <div className="counter-item">
                <h3 className="text-4xl font-bold text-green-500">{200}</h3>
                <p className="text-gray-600">Completed Marriages</p>
              </div>
            </div>
          </div>
        </section>
      );
    };
export default SuccessCounter;