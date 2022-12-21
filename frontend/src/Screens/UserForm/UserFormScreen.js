import React, { useState } from 'react';
import './UserFormScreen.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const UserFormScreen = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [dob, setdob] = useState(new Date());
  const [mobNO, setMobNo] = useState('');
  const [dobError, setDobError] = useState(true);
  const [loading, setLoading] = useState(false);
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  var regemail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+$/;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!nameError && !emailError && !dobError) {
      try {
        setLoading(true);
        const { data } = await axios.post('/api/user/user-form', {
          name: name,
          email: email,
          mobileNo: mobNO,
          dob: dob,
        });
        setLoading(false);
        alert(data);
        navigate('/users');
      } catch (err) {
        alert(err.response.data.message || err.message);
      }
    }
  };
  return (
    <div className="form-container">
      <h1>User Form</h1>
      <div className="form">
        <h2>Fill the form to get Email</h2>
        <form onSubmit={submitHandler}>
          <div className="box">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (regName.test(e.target.value)) {
                  setNameError(false);
                } else {
                  setNameError(true);
                }
              }}
              required
            ></input>
            <div
              className="errBox"
              style={{ display: nameError ? 'flex' : 'none' }}
            >
              Please enter your full name (first & last name).
            </div>
          </div>
          <div className="box">
            <label>E-Mail</label>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (regemail.test(e.target.value)) {
                  setEmailError(false);
                } else {
                  setEmailError(true);
                }
              }}
              required
            ></input>
            <div
              className="errBox"
              style={{ display: emailError ? 'flex' : 'none' }}
            >
              Please enter your full name (first & last name).
            </div>
          </div>
          <div className="box">
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobNO}
              onChange={(e) => {
                setMobNo(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className="box">
            <label>Date Of Birth</label>
            <input
              type="date"
              placeholder="Date Of Birth"
              onChange={(e) => {
                setdob(
                  new Date(
                    e.target.value.substring(0, 4),
                    e.target.value.substring(5, 7) - 1,
                    e.target.value.substring(8, 10)
                  )
                );
                var diff_ms =
                  Date.now() -
                  new Date(
                    e.target.value.substring(0, 4),
                    e.target.value.substring(5, 7) - 1,
                    e.target.value.substring(8, 10)
                  ).getTime();
                var age_dt = new Date(diff_ms);
                if (Math.abs(age_dt.getUTCFullYear() - 1970) < 18) {
                  setDobError(true);
                } else {
                  setDobError(false);
                }
              }}
              required
            ></input>
            <div
              className="errBox"
              style={{ display: dobError ? 'flex' : 'none' }}
            >
              Age Must be 18+
            </div>
          </div>
          <div className="box">
            {loading ? (
              <button className="btn" type="submit" disabled>
                <h4>Submit...</h4>
              </button>
            ) : (
              <button className="btn" type="submit">
                <h4>Submit</h4>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormScreen;
