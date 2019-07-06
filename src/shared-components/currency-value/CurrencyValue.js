import React, {Component} from 'react';

import './CurrencyValue.css';

class CurrencyValue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isReadOnly: false,
            currencyValue: ''
        }
    }

    render() {
        return(
            <div className="currency-value">
                <input
                    value={this.state.currencyValue === '' ? '' : this.state.currencyValue}
                    // placeholder={isReadOnly === true ? '' : 'Enter currency...'}
                    readOnly={this.props.isReadOnly}
                    onChange={(e) => this._setCurrencyValue(e.target.value)}
                />
            </div>
        )
    }

    _setCurrencyValue = (value) => {
        this.setState({currencyValue: value});
    }
}
export default CurrencyValue;