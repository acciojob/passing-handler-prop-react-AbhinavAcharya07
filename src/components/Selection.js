import React, { useState } from 'react';
import '../styles/child.css';

const Selection = ({ applyColor, subheading, selection, heading }) => {
  const [style, setStyle] = useState({ background: '' });

  const displayText = subheading || selection || heading;

  return (
    <div 
      className='fix-box' 
      style={style} 
      onClick={() => applyColor(setStyle)}
    >
      <p className='subheading'>{displayText}</p>
    </div>
  );
};

export default Selection;
