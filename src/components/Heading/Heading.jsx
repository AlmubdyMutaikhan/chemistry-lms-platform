import React from 'react';
import './HeadingComponent.css';  // Optional: create a CSS file for styling this component

const HeadingComponent = ({ title, text }) => {
  return (
    <div className="heading-container">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default HeadingComponent;
