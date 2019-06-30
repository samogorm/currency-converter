import React, { Component } from 'react';

import './SelectOption.css';

class SelectOption extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null
        }
    }

    render() {
        return(
            <div key={this.props.key} className="select-option">
                
            </div>
        )
    }
}

export default SelectOption;