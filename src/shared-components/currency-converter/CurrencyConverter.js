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
            targetCurrency: null
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
                        <SelectOptionList id="1" currency_code="EUR" country="Europe" currency="Euro" options={this.state.currencyInformation}/>
                        <ConversionRate base_currency_code="USD" base_currency_rate="1" target_currency_code="GBP" target_currency_rate="0.7" />
                    </div>
                   <div className="currency-value">
                        <CurrencyValue currency_value="1,520" isReadOnly={false} />
                   </div>
                </div>
                <div className="divider"></div>
                <div className="target-currency">
                    <div className="currency-info">
                        <SelectOptionList id="1" currency_code="GBP" country="England" currency="Great British Pound" options={this.state.currencyInformation}/>
                        <ConversionRate base_currency_code="USD" base_currency_rate="1" target_currency_code="GBP" target_currency_rate="0.7" />
                    </div>
                    <div className="currency-value">
                        <CurrencyValue currency_value="1,520" isReadOnly={true}/>
                    </div>
                </div>
                <Switch />
            </div>
        )
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