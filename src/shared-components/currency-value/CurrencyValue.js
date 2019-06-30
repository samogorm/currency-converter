import React from 'react';

import './CurrencyValue.css';

export const CurrencyValue = (props) => {
    return(
        <div className="currency-value">
            <h3>{props.currency_value}</h3>
        </div>
    )
}