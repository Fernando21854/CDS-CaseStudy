// src/ApplicationList.js
//import react library and useeffect and usestate hooks
import React, { useEffect, useState } from 'react';

import axios from 'axios';
//define application list
const ApplicationList = () => {
    //initialize state variables with empty arrays
    const [applications, setApplications] = useState([]);
    //use effect hook 
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

    return (
        <ul>
            {applications.map(app => (
                <li key={app.id}>
                    {app.full_name} - ${app.requested_loan_amount} - {app.approval_status}
                </li>
            ))}
        </ul>
    );
};

export default ApplicationList;
