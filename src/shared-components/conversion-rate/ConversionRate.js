import React from 'react';

import './ConversionRate.css';

export const ConversionRate = (props) => {
    let baseCurrency = {
        code: props.base_currency_code,
        rate: props.base_currency_rate
    }

    let targetCurrency = {
        code: props.target_currency_code,
        rate: props.target_currency_rate
    }

    return(
        <div className="conversion-rate">
            <h6>{baseCurrency.rate} {baseCurrency.code} = {targetCurrency.rate} {targetCurrency.code}</h6>
        </div>
    )
}