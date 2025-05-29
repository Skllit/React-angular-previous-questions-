import React, { useState, useEffect } from 'react';
import PropertyService from './PropertService';
import { Link } from 'react-router-dom';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
     const fetchProperties = async () => {
        try{
        const data=await PropertyService.getAllProperties();
        setProperties(data);
        setLoading(false);
        }
        catch(err){
            setError(err.message);
            setLoading(false);
        }

     }
     fetchProperties();
     
  },[])

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>




  return (
    <div className="list-container">
      <h2>Properties List</h2>
      <ul>
        {properties.map((property)=>(
            <li key={property._id}>
                <Link to={`/properties/${property._id}`}>
                {property.location}-{property.type}
                </Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;



