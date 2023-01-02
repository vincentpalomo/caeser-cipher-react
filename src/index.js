import React from 'react';
import { createRoot } from 'react-dom/client';
import { CaeserCipher } from './components';

const App = () => {
  return (
    <div>
      <CaeserCipher />
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab='home' />);
