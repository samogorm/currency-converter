import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch } from './shared-components/switch/Switch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Switch />
      </header>
    </div>
  );
}

export default App;
