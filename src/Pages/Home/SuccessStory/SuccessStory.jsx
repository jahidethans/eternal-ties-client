import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Marquee from 'react-fast-marquee';

const SuccessStory = () => {
    const [successStories, setSuccessStories] = useState([]);

    useEffect(() => {
      // Fetch success stories from the server (assuming 'marriage.json' is hosted on the server)
      axios.get('/marriage.json')
        .then(response => setSuccessStories(response.data))
        .catch(error => console.error('Error fetching success stories:', error));
    }, []);
  
    return (
      <div className="success-stories-marquee">
        <Marquee>
          {successStories.map(story => (
            <div key={story.id}>
            <div  className="bg-gray-100 p-8 rounded-md shadow-md max-w-md mx-auto my-4">
     
     <img src={story.image} alt={name} className="h-64 w-96 object-cover mb-4 rounded-md" />

     <div><div className="mb-2">
       <strong>Marriage date:</strong> {story.marriageDate}
     </div>
     <div className="mb-2">
       <strong>Their story:</strong> {story.successStory}
     </div>
     
    
    
     </div>
     
     
   </div>
       </div>
          ))}
        </Marquee>
      </div>
    );
  };
export default SuccessStory;