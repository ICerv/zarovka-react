import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Bulb from './Bulb';

const App = () => {
  return (
    <div className="container">
      <Bulb on={false} />
      <Bulb on={false} />
      <Bulb on={true} />
      <Bulb on={true} />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
