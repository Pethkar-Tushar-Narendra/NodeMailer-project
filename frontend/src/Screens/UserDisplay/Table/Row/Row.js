import React from 'react';
import '../Row.css';
const Row = ({ array }) => {
  return (
    <>
      {array.map((item, i) => (
        <div className="row" key={i}>
          <div className="col1">{i}</div>
          <div className="col2">{item.name ? item.name : 'Not Available'}</div>
          <div className="col3">
            {item.email ? item.email : 'Not Available'}
          </div>
          <div className="col4">
            {item.mobileNo ? item.mobileNo : 'Not Available'}
          </div>
          <div className="col5">{item.dob ? item.dob : 'Not Available'}</div>
        </div>
      ))}
    </>
  );
};

export default Row;
