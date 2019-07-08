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
                    placeholder={this.props.isReadOnly === true ? '' : '0'}
                    readOnly={this.props.isReadOnly}
                    onChange={
                        (e) => {
                            this._setCurrencyValue(e.target.value);
                            this._passValueToParent(e.target.value);
                        }
                    }
                />
            </div>
        )
    }

    /**
     * Sets the currency value.
     * 
     * @var {any} value the value.
     */
    _setCurrencyValue = (value) => this.setState({currencyValue: value});

    /**
     * Passes the value to the parent component via props.
     * 
     * @var {any} value the input value.
     */
    _passValueToParent = (value) => {
        this.props.getCurrencyValue(value);
    };
}
export default CurrencyValue;