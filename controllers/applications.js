const db = require('../database');

//Get all applications
exports.getApplications = (req, res) => {
  db.all('SELECT * FROM applications', [], (err, rows) => {
    //if an error occurs, respons with 400 status code
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    //respond with the retrieved rows as JSON object
    res.json({ data: rows });
  });
};

//Create a new application
exports.createApplication = (req, res) => {
  //extract the fullname and requested loan amount from body
  const { full_name, requested_loan_amount } = req.body;
  db.run('INSERT INTO applications (full_name, requested_loan_amount, approval_status) VALUES (?, ?, ?)', [full_name, requested_loan_amount, 'waiting decision'], function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
};

//Update application status
exports.updateApplication = (req, res) => {

  //extract the id from request params
  const { id } = req.params;
  //extract approbal status
  const { approval_status } = req.body;
  db.run('UPDATE applications SET approval_status = ? WHERE id = ?', [approval_status, id], function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ updatedID: id });
  });
};
