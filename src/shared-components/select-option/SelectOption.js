import React, { Component } from 'react';

import './SelectOption.css';
import chevronDown from './../../assets/icons/chevron-down.svg';

class SelectOption extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: false
        }

        this._passSelectedValueBackToParent = this._passSelectedValueBackToParent.bind(this);
    }

    render() {
        return(
            <button key={this.props.key} className="select-option--selected" type="button" onClick={() => this._passSelectedValueBackToParent(this.props.currency_code)}>
                <div className="button-left">
                    <img className="country-flag" src={require(`./../../assets/country-flags/${this.props.currency_code}.svg`)} alt={`${this.props.country} Flag`} />
                    <span>{this.props.currency_code} - {this.props.currency}</span>
                </div>
                <div className="button-right">
                    <img className="chevron-down" src={chevronDown} alt="Chevron Down Icon" />
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
        this.props.captureValue(value);
    }
}

export default SelectOption;