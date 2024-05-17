//import sqlite3 library and enable verbose mode for detailed logging
const sqlite3 = require('sqlite3').verbose();
//create database connection
const db = new sqlite3.Database('./database.sqlite');

//Initialize the database schema
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    requested_loan_amount REAL NOT NULL,
    approval_status TEXT NOT NULL
  )`);
});

module.exports = db;

