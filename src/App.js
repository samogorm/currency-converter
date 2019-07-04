import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch } from './shared-components/switch/Switch';
import { ConversionRate } from './shared-components/conversion-rate/ConversionRate';
import { CurrencyValue } from './shared-components/currency-value/CurrencyValue';
import SelectOptionList from './shared-components/select-option-list/SelectOptionList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <Switch />
        <ConversionRate base_currency_code="USD" base_currency_rate="1" target_currency_code="GBP" target_currency_rate="0.7"/>
        <CurrencyValue currency_value="1,520" />

        <SelectOptionList id="1" currency_code="EUR" country="Europe" currency="Euro"/>
      </header>
    </div>
  );
}

export default App;
