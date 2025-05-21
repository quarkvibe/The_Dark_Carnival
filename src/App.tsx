import React, { useState } from 'react';
import { Carnival } from './components/Carnival';
import { Settings } from './components/Settings';
import { CarnivalProvider } from './context/CarnivalContext';

function App() {
  return (
    <CarnivalProvider>
      <div className="app-container">
        <Carnival />
        <Settings />
      </div>
    </CarnivalProvider>
  );
}

export default App;