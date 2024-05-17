//set up basic server using Express framework in Node.js  
//import the Express library
const express = require('express');
//create an instance of the Express application
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//Middleware for handling JSON data and Cross-Origin Resource Sharing
app.use(bodyParser.json());
app.use(cors());

//Routes
const applicationRoutes = require('./routes/applications');
app.use('/applications', applicationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
