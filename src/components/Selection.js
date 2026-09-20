import React, { useState } from 'react';
import '../styles/child.css';

const Selection = ({ applyColor, subheading }) => {
  const [style, setStyle] = useState({ background: '' });

  return (
    <div 
      className='fix-box' 
      style={style} 
      onClick={() => applyColor(setStyle)}
    >
      <p className='subheading'>{subheading}</p>
    </div>
  );
};

export default Selection;
