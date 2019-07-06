import React from 'react';
import CurrencyConverter from './shared-components/currency-converter/CurrencyConverter';

// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="app">
      <div className="app-body">
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
