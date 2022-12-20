import React from 'react';
import './UserFormScreen.css';
const UserFormScreen = () => {
  return (
    <div className="form-container">
      <h1>User Form</h1>
      <div className="form">
        <h2>Fill the form to get Email</h2>
        <form>
          <div className="box">
            <label>Name</label>
            <input type="text" placeholder="Enter Name"></input>
            <div className="errBox" style={{ display: 'none' }}>
              error
            </div>
          </div>
          <div className="box">
            <label>E-Mail</label>
            <input type="text" placeholder="Enter Email"></input>
            <div className="errBox" style={{ display: 'none' }}>
              error
            </div>
          </div>
          <div className="box">
            <label>Mobile Number</label>
            <input type="number" placeholder="Enter Mobile Number"></input>
            <div className="errBox" style={{ display: 'none' }}>
              error
            </div>
          </div>
          <div className="box">
            <label>Date Of Birth</label>
            <input type="text" placeholder="Date Of Birth"></input>
            <div className="errBox" style={{ display: 'none' }}>
              error
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormScreen;
