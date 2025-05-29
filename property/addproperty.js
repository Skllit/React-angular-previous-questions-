---------------------
import React, { useState } from 'react';
import PropertyService from './PropertService';

const AddProperty = () => {
  const [property, setProperty] = useState({
    _id: '',
    type: '',
    location: '',
    price: '',
    rooms: '',
    size: ''
  });

  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try{
        await PropertyService.addProperty(property);
        setMessage('Property added');

    }
    catch(err){
        setError(err.message);
    }
    
    
  };

  return (
    <div className="form-container">
      <h2>Add New Property</h2>
      {error && <p className='error'>{error}</p>}
      {message && <p className='success'>{message}</p>}
      <form onSubmit={handleSubmit}>
        {['_id','type','location','price','rooms','size'].map((feild)=>(
            <div key={feild}>
                <label>{field}:</label>
                <input
                name='{feild}'
                value={property[feild]}
                onChange={handleChange}
                required
                />
            </div>
        ))}
        <button type='submit'>Add property</button>
      </form>
    </div>
  );
};

export default AddProperty;
