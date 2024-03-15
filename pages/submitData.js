// pages/submitData.js

import React, { useState } from 'react';
import axios from 'axios';

const SubmitDataPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/createUser', { name, email });
            alert('Data submitted successfully');
            setName('');
            setEmail('');
        } catch (error) {
            alert('Error submitting data');
        }
    };

    return (
        <div>
            <h1>Submit Data</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SubmitDataPage;
