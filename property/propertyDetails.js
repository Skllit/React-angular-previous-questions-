
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertyService from './PropertService';

const PropertyDetail = () => {
  const { propertyID } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
        try{
            const data=await PropertyService.getPropertyByID(propertyID);
            setProperty(data[0]);
            setLoading(false);

        }
        catch(err){
            setError(err.message);
            setLoading(false);
        }

     }
     fetchProperties();
    
    
  },[propertyID]);

 if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>


  return (
    <div className="detail-container">
      <h2>Property Details</h2>
      <p><strong>Type:</strong>{property.type}</p>
      <p><strong>Location:</strong>{property.location}</p>
      <p><strong>Price:</strong>{property.price}</p>
      <p><strong>Rooms:</strong>{property.rooms}</p>
      <p><strong>Size:</strong>{property.size}</p>

    </div>
  );
};

export default PropertyDetail;

