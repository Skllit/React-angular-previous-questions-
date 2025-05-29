const API_URL = 'http://localhost:3000/properties';

const PropertyService = {
    getAllProperties: async () => {
        const response=await fetch(API_URL);
        if(!response.ok)throw new Error("Failed to fetch properties");
        return response.json();
    },

    getPropertyByID: async (propertyID) => {
        const response=await fetch(`${API_URL}?_id:${propertyID}`);
        if(!response.ok)throw new Error("Failed to fetch property details");
        return response.json();
    },
    addProperty: async (newProperty) => {
        const response=await fetch(API_URL,{
            method:'POST',
            headers:{'ContentType':'application/json'},
            body:JSON.stringify(newProperty)
        });
        if(!response.ok)throw new Error("Failed to add property");
        return response.json();

    }



}
export default PropertyService;
