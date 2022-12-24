import React from 'react';
import '../Row.css';

const Header = () => {
  return (
    <div className="row">
      <div className="col1">Id</div>
      <div className="col2">Name</div>
      <div className="col3">E-mail</div>
      <div className="col4">Mobile No.</div>
      <div className="col5">Dob</div>
    </div>
  );
};

export default Header;
