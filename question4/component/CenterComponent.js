
import React from 'react';

const CenterComponent = ({ text, onTextChange }) => {
  return (
    <div>
      Center Component:
      <input type="text" value={text} onChange={onTextChange} />
    </div>
  );
};

export default CenterComponent;
