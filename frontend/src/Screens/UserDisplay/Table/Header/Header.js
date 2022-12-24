import React from 'react';
import '../Row.css';

const Header = () => {
  return (
    <div className="row">
      <div className="col1">
        <h4>Id</h4>
      </div>
      <div className="col2">
        <h4>Name</h4>
      </div>
      <div className="col3">
        <h4>E-mail</h4>
      </div>
      <div className="col4">
        <h4>Mobile No.</h4>
      </div>
      <div className="col5">
        <h4>Dob</h4>
      </div>
    </div>
  );
};

export default Header;
