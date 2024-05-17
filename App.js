import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoanForm from './LoanForm';
import ApplicationList from './ApplicationList';
import AdminView from './AdminView';


const App = () => {
    //create new search paramter object to parse the query parameters from the URL
  const queryParams = new URLSearchParams(window.location.search);
  //retrieve value of user type query
  const userType = queryParams.get('user_type');
    
  return (
      <div className="App">
          <h1>Loan Management System</h1>
          {userType === 'admin' ? <AdminView /> : <>
              <LoanForm />
              <ApplicationList />
          </>}
      </div>
  );
};
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

