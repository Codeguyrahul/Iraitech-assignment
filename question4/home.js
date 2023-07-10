import React, { useState } from 'react';
// import TopLeftComponent from './components/TopLeftComponent';

// import TopRightComponent from './components/TopRightComponent';
// import BottomLeftComponent from './components/BottomLeftComponent';
// import BottomRightComponent from './components/BottomRightComponent';
// // import CenterComponent from './components/CenterComponent';
import TopLeftComponent from './component/TopLeftComponent';
import TopRightComponent from './component/TopRightComponent';
import BottomLeftComponent from './component/BottomLeftComponent';
import BottomRightComponent from './component/BottomRightComponent';
import CenterComponent from './component/CenterComponent';

const Home = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <TopLeftComponent text={text} />
        <TopRightComponent text={text} />
      </div>
      <CenterComponent text={text} onTextChange={handleTextChange} />
      <div style={{ display: 'flex' }}>
        <BottomLeftComponent text={text} />
        <BottomRightComponent text={text} />
      </div>
    </div>
  );
};

export default Home;
