import React, { Component } from 'react';

import './SelectOption.css';

class SelectOption extends Component {
    constructor(props) {
        super(props);

        this._passSelectedValueBackToParent = this._passSelectedValueBackToParent.bind(this);
    }

    render() {
        return(
            <button key={this.props.id} className="select-option" type="button" onClick={() => this._passSelectedValueBackToParent({ country: this.props.country, currency_code: this.props.currency_code, currency: this.props.currency})}>
                <div className="button-left">
                    <img className="country-flag" src={require(`./../../assets/country-flags/${this.props.currency_code}.svg`)} alt={`${this.props.country} Flag`} />
                    <span>{this.props.currency_code} - {this.props.currency}</span>
                </div>
            </button>
        )
    }

    /**
     * This will pass the state value up one parent level.
     * Given that the prop callback is 'captureKeyValue'.
     *
     * @var {Any} value The value to be passed up to the parent.
     */
    _passSelectedValueBackToParent = (value) => {
        this.props.captureOptionValue(value);
    }
}

export default SelectOption;