import React, {Component} from 'react';
import SelectOption from './../select-option/SelectOption';

import './SelectOptionList.css';
import chevronDown from './../../assets/icons/chevron-down.svg';

class SelectOptionList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null,
            options: [
                {
                    country: 'Canada',
                    currency: 'Canadian Dollar',
                    code: 'CAD',
                    number: 124,
                    country_flag: 'Canada',
                    archived: false
                },
                {
                    country: 'Hong Kong',
                    currency: 'Hong Kong Dollar',
                    code: 'HKD',
                    number: 344,
                    archived: false
                },
                {
                    country: 'Iceland',
                    currency: 'Iceland Krona',
                    code: 'ISK',
                    number: 352,
                    archived: false
                },
                {
                    country: 'The Philippines',
                    currency: 'Philippine Peso',
                    code: 'PHP',
                    number: 608,
                    archived: false
                }
            ],
            isDropdownToggled: false
        }

        this._renderSelectedOption = this._renderSelectedOption.bind(this);
        this._toggleDropdown = this._toggleDropdown.bind(this);
        this._renderOptions = this._renderOptions.bind(this);
        this._captureOptionValue = this._captureOptionValue.bind(this);
    }

    render() {
        return(
            <div id={this.props.listId} className={`select-option-list ${this.state.isDropdownToggled ? 'select-option-list--open' : 'select-option-list--closed'}`}>
                <button key={this.props.key} className="select-option select-option--selected" type="button" onClick={this._toggleDropdown}>
                    {this._renderSelectedOption()}
                    <div className="button-right">
                        <img className="chevron-down" src={chevronDown} alt="Chevron Down Icon" />
                    </div>
                </button>
                <div className={`select-option-list-dropdown ${this.state.isDropdownToggled ? 'select-option-list-dropdown--open' : 'select-option-list-dropdown--closed'}`}>
                    {this._renderOptions()}
                </div>
            </div>
        )
    }

    _renderSelectedOption = () => {
        if(this.state.selectedOption !== null) {
            return(
                <div className="button-left">
                    <img className="country-flag" src={require(`./../../assets/country-flags/${this.state.selectedOption.currency_code}.svg`)} alt={`${this.state.selectedOption.country} Flag`} />
                    <span>{this.state.selectedOption.currency_code} - {this.state.selectedOption.currency}</span>
                </div>
            );
        } else {
            return(
                <div className="button-left">
                    <span>Select an option...</span>
                </div>
            )
        }
    }

    /**
     * Toggles the state of isDropdownToggled to true/false.
     */
    _toggleDropdown = () => {
        this.setState({isDropdownToggled: !this.state.isDropdownToggled});
    }

    /**
     * Renders the option list.
     */
    _renderOptions = () => {
        let options = this.state.options;

        if(options.length > 0) {
            return options.map((option, index)=> {
                if(this.state.selectedOption === null || this.state.selectedOption.currency_code !== option.code) {
                    return(
                        <SelectOption 
                            key={index} 
                            currency_code={option.code} 
                            country={option.country} 
                            currency={option.currency} 
                            captureOptionValue={this._captureOptionValue}
                        />
                    );
                }
            });
        }
    }

    /**
     * Gets the option value from the child component.
     * 
     * @var {Object} value the object passed from the child.
     */
    _captureOptionValue = (value) => {
        this.setState({
            selectedOption: value, 
            isDropdownToggled: false
        });
    }

}

export default SelectOptionList;