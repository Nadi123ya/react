import React from 'react';

const Spinner = ({ size }) => (
  <span
    style={{
      width: size,
      height: size,
    }}
    className="spinner"
  />
);

export default Spinner;