import React from 'react';
import './Text.css';  // Optional if you want separate CSS

const Text = ({ title, text, text2, image }) => {
  return (
    <div className="supplementary-text">
      <h2>{title}</h2>
      <p>{text}</p>
      <img src={image} height={300} width={300} alt="image"/>
      <p>{text2}</p>
    </div>
  );
};

export default Text;
