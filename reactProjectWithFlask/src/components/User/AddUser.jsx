import React, { useEffect, useState } from 'react';
import { Input, Button } from "@material-tailwind/react";
import axios from 'axios';

function AddUser({ OnUserAdded }) {
    const [formData, setFormData] = useState({name: '', email: ''});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev, 
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        
        setLoading(true);
        setError(null);
        setSuccess(false);
        
        try {
            console.log('Submitting form data:', formData); // Debug log
            const response = await axios.post("/api/users/add_user", formData);
            console.log('API Response:', response); // Debug log
            
            if (response.status >= 200 && response.status < 300) {
                setSuccess(true);
                setFormData({name: '', email: ''});
                if (OnUserAdded) OnUserAdded(response.data.data);
                setTimeout(() => setSuccess(false), 3000);
            } else {
                setError(`Unexpected status code: ${response.status}`);
            }
        } catch(err) {
            console.error('API Error:', err); // Debug log
            setError(err.response?.data?.message || 'Failed to add user');
            setTimeout(() => setError(null), 3000);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex items-center justify-center text-brown-50'>
            <div className="text-center">
                <h3 className="mb-4 font-semibold">Add New User</h3>
                <form onSubmit={handleSubmit} className="m-2 w-72">
                    <div>
                        <Input 
                            value={formData.name} 
                            onChange={handleChange}
                            type="text" 
                            id='name'
                            name='name'
                            color="black"
                            required 
                            label="Name"
                        />
                    </div>
                    <br />
                    <div>
                        <Input
                            className='justify-center flex-shrink-0' 
                            value={formData.email} 
                            onChange={handleChange}
                            id='email'
                            name='email'
                            type="email" 
                            color="black" 
                            required
                            label="Email"
                        />
                    </div>
                    
                    {/* Enhanced message display with animation */}
                    <div className="min-h-6">
                        {error && (
                            <div className='text-red-500 animate-fade-in'>
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className='text-green-500 animate-fade-in'>
                                User Added Successfully!
                            </div>
                        )}
                    </div>

                    <Button 
                        className='m-3' 
                        type='submit' 
                        variant="outlined" 
                        disabled={loading}
                    >
                        {loading ? 'Adding...' : 'Add User'}
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default AddUser;