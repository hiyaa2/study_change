import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import PlusButtonComponent from './components/PlusButton';
import MinusButtonComponent from './components/MinusButton';

import './App.css';

function LoadingPage() {
  return (
    <div className="loading-wrapper">
      <ReactLoading type="spinningBubbles" />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) return <LoadingPage/>;
  //state
  return (
    <div className="loading-wrapper">
      <PlusButtonComponent number={number} setNumber={setNumber} />
      <div>{number}</div> 
      <MinusButtonComponent number={number} setNumber={setNumber} />
    </div>
  );
}



export default App;


