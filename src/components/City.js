import React from 'react';

function City({ name, temp, icon, bgColor }) {
  return (
    <li className="paragraph-cities" style={{ backgroundColor: bgColor }}>
      <p className="city">{name}</p>
      <span className="temperature">{temp}</span>
      <i className={`wi ${icon}`}></i>
    </li>
  );
}

export default City;