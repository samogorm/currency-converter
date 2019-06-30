import React from 'react';

import './Switch.css';
import arrowUp from './../../assets/icons/arrow-up.svg';
import arrowDown from './../../assets/icons/arrow-down.svg';

export const Switch = () => {
    return(
        <div className="switch">
            <img src={arrowDown} alt="Arrow Down Icon" />
            <img src={arrowUp} alt="Arrow Up Icon" />
        </div>
    )
}