import React from 'react';
import './UserDisplay.css';
const UserDisplay = () => {
  return (
    <div className="userDisplay-conatiner">
      <h1>Registered Users</h1>
      <table className="table">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Mobile No.</th>
          <th>Dob</th>
        </tr>
        <tr>
          <th>1</th>
          <th>Tushar Pethkar</th>
          <th>pethkartusharnarendra@gmail.com</th>
          <th>8446520712</th>
          <th>04-04-1999</th>
        </tr>
      </table>
    </div>
  );
};

export default UserDisplay;
