import React, { useEffect, useState } from 'react';
import axios from 'axios';
//fetch all applications
//display applications
//handle approval and denial
const AdminView = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get('http://localhost:5000/applications');
                setApplications(response.data.data);
            } catch (error) {
                console.error('Error fetching applications', error);
            }
        };

        fetchApplications();
    }, []);

    const handleApproval = async (id, status) => {
        try {
            await axios.put(`http://localhost:5000/applications/${id}`, { approval_status: status });
            setApplications(applications.map(app => app.id === id ? { ...app, approval_status: status } : app));
        } catch (error) {
            console.error('Error updating application status', error);
        }
    };

    return (
        <ul>
            {applications.map(app => (
                <li key={app.id}>
                    {app.full_name} - ${app.requested_loan_amount} - {app.approval_status}
                    {app.approval_status === 'waiting decision' && (
                        <>
                            <button onClick={() => handleApproval(app.id, 'approved')}>Approve</button>
                            <button onClick={() => handleApproval(app.id, 'denied')}>Deny</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default AdminView;
