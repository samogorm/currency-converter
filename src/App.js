import React from 'react';
import CurrencyConverter from './shared-components/currency-converter/CurrencyConverter';

import logo from './assets/images/app-logo.svg';
import './App.css';


function App() {
  return (
    <div className="app">
      <div className="app-body">
        <div className="header">
          <img src={logo} alt="Currency Converter Logo" />
          <h4>Currency Converter</h4>
        </div>
        <CurrencyConverter />
        <div className="special-thanks">
          <span>Special thanks to...</span>
          <ul>
            <li>
              <a href="https://www.freepik.com">Freepik</a> for the flag icons from www.flaticon.com
            </li>
            <li>
              <a href="https://exchangeratesapi.io">Exchange Rates API</a> for the exchange rates data
            </li>
          </ul>
          <p>A web app built by <a href="https://github.com/samogorm">Samantha O'Gorman</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;