import React, {Component} from 'react';
import { RequestConfig } from './../../utils/RequestUtil';
import { Switch } from './../switch/Switch';
import { ConversionRate } from './../conversion-rate/ConversionRate';
import CurrencyValue from './../currency-value/CurrencyValue';
import SelectOptionList from './../select-option-list/SelectOptionList';

import './CurrencyConverter.css';

class CurrencyConverter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currencyInformation: [],
            baseCurrency: null,
            targetCurrency: null,
            exchangeRates: [],
            baseCurrencyInput: '',
            targetCurrencyOutput: null,
            currentExchangeRate: null
        }
    }

    componentWillMount() {
        this._getCurrencyInformationFromAPI();
    }

    render() {
        return(
            <div className="currency-converter">
                <div className="base-currency">
                    <div className="currency-info">
                        <SelectOptionList type="base" options={this.state.currencyInformation} passSelectedCurrency={this._setSelectedBaseCurrency} />
                        {this._renderCurrencyValue('base')}
                    </div>
                   <div className="currency-value">
                        <CurrencyValue isReadOnly={false} getCurrencyValue={this._getBaseCurrencyValue} />
                   </div>
                </div>
                <div className="divider"></div>
                <div className="target-currency">
                    <div className="currency-info">
                        <SelectOptionList type="target" options={this.state.currencyInformation} passSelectedCurrency={this._setSelectedTargetCurrency}/>
                        {this._renderCurrencyValue('target')}
                    </div>
                    <div className="currency-value">
                        {/* <CurrencyValue currency_value="1,520" isReadOnly={true}/> */}
                        {this._renderCurrencyExchangeValue()}
                    </div>
                </div>
                <Switch />
            </div>
        )
    }

    /**
     * Gets the selected base currency from the child component (SelectOptionList) props and sets the state.
     * 
     * @var {any} base the base currency. 
     */
    _setSelectedBaseCurrency = (base) => {
        this.setState({ baseCurrency: base });

        this._getExchangeRatesForBaseCurrency(base);
    };

    /**
    * Gets the selected target currency from the child component (SelectOptionList) props and sets the state.
    *
    * @var {any} target the target currency.
    */
    _setSelectedTargetCurrency = (target) => {
        this.setState({ targetCurrency: target });

        // Calculate the exchange rate.
        this._calculateExchangeValue(target);
    }

    /**
     * Renders the currency value.
     */
    _renderCurrencyValue = (type) => {
        let baseCurrency = this.state.baseCurrency;
        let targetCurrency = this.state.targetCurrency;
        let exchangeRate = this.state.currentExchangeRate;

        if (exchangeRate !== null) exchangeRate = exchangeRate.toFixed(2);

        switch(type) {
            case 'base':
                if (baseCurrency !== null && targetCurrency !== null && exchangeRate !== null) {
                    return (
                        <ConversionRate base_currency_code={baseCurrency.currency_code} base_currency_rate="1" target_currency_code={targetCurrency.currency_code} target_currency_rate={exchangeRate} />
                    )
                }
        }

        return null;
    }

    /**
     * Gets the base currency input.
     */
    _getBaseCurrencyValue = (value) => {
        this.setState({
            baseCurrencyInput: value
        });
    }

    _calculateExchangeValue = (targetCurrency) => {
        let exchangeRates = this.state.exchangeRates.rates;
        let rate = exchangeRates[`${targetCurrency.currency_code}`];
        let calculatedExchangeRate = this.state.baseCurrencyInput * rate;

        // Set states.
        this.setState({
            currentExchangeRate: rate,
            targetCurrencyOutput: calculatedExchangeRate.toFixed(2)
        })
    }

    _renderCurrencyExchangeValue = () => {
        return(
            <h3>{this.state.targetCurrencyOutput !== null ? this.state.targetCurrencyOutput : '0'}</h3>
        )
    }

    /**
     * Makes an API request to the exchange rates api and gets
     * all available exchange rates for the base currency.
     * 
     * @var {String} base the base currency.
     */
    _getExchangeRatesForBaseCurrency = (base) => {
        let config = RequestConfig('GET');

        return fetch(`${process.env.REACT_APP_DEV_API_URL}exchangerates?base=${base.currency_code}`, config)
            .then(response =>
                response.json()
                    .then(exchangeRates => ({ exchangeRates, response }))
                    .then(({ exchangeRates, response }) => {
                        if (!response.ok) {
                            this.setState({ requestHasError: true });
                            return Promise.reject(exchangeRates);
                        } else {
                            this.setState({ exchangeRates: exchangeRates.data.exchange_rates, requestHasError: false });
                            return Promise.resolve(exchangeRates);
                        }
                    })
                    .catch(error => console.log("Error: ", error))
            );
    }

    /**
     * This gets the currency information from the 
     * API and stores it to the component state.
     */
    _getCurrencyInformationFromAPI = () => {
        let config = RequestConfig('GET');

        return fetch(`${process.env.REACT_APP_DEV_API_URL}currencyinformation`, config)
            .then(response =>
                response.json()
                .then(currencyInformation => ({ currencyInformation, response }))
                .then(({ currencyInformation, response }) => {
                    if (!response.ok) {
                        this.setState({requestHasError: true});
                        return Promise.reject(currencyInformation);
                    } else {
                        this.setState({currencyInformation: currencyInformation.data, requestHasError: false});
                        return Promise.resolve(currencyInformation);
                    }
                })
                .catch(error => console.log("Error: ", error))
            );
    }
}
 
export default CurrencyConverter;