import React from 'react';
import '../Row.css';
const Row = ({ array }) => {
  return (
    <>
      {array.map((item, i) => (
        <div className="row" key={i}>
          <div className="col1">
            <h5>{i}</h5>
          </div>
          <div className="col2">
            <h5>{item.name ? item.name : 'Not Available'}</h5>
          </div>
          <div className="col3">
            <h5>{item.email ? item.email : 'Not Available'}</h5>
          </div>
          <div className="col4">
            <h5>{item.mobileNo ? item.mobileNo : 'Not Available'}</h5>
          </div>
          <div className="col5">
            <h5>{item.dob ? item.dob.substr(0, 10) : 'Not Available'}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default Row;
