import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import Header from './Table/Header/Header';
import Row from './Table/Row/Row';
import './UserDisplay.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, dataArray: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const UserDisplay = () => {
  const [{ loading, error, dataArray }, dispatch] = useReducer(reducer, {
    loading: true,
    dataArray: [],
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get(`/api/user/getUsers`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: err.response.data.message || err.message,
        });
      }
    };
    fetchData();
  }, []);
  return (
    <div className="userDisplay-conatiner">
      <h1>Registered Users</h1>
      {loading ? (
        <h3>Requesting Data ...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <>
          <div className="table">
            {/* <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Mobile No.</th>
                <th>Dob</th>
              </tr>
            </thead>
            <tbody>
              {dataArray ? (
                dataArray.map((item, i) => (
                  <tr key={item._id}>
                    <th>{i + 1}</th>
                    <th>{item.name}</th>
                    <th>{item.email}</th>
                    <th>{item.mobileNo}</th>
                    <th>{item.dob.substring(0, 10)}</th>
                  </tr>
                ))
              ) : (
                <tr>No Data In Database</tr>
              )}
            </tbody> */}
            <Header />
            <Row array={dataArray} />
          </div>
        </>
      )}
    </div>
  );
};

export default UserDisplay;
