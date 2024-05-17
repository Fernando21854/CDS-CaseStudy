// src/LoanForm.js
import React, { useState } from 'react';
//import axios library for making HTTP requests
import axios from 'axios';

//loan form
const LoanForm = () => {
    
    const [form, setForm] = useState({ full_name: '', requested_loan_amount: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/applications', form);
            alert('Application submitted successfully');
            setForm({ full_name: '', requested_loan_amount: '' });
        } catch (error) {
            console.error('Error submitting application', error);
            alert('Error submitting application');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                value={form.full_name}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="requested_loan_amount"
                placeholder="Requested Loan Amount"
                value={form.requested_loan_amount}
                onChange={handleChange}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoanForm;
