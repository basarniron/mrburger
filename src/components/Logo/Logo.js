import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png';
import classes from './Logo.css';
const logo = (props) => {
    return (
        <div logo={classes.Logo}>
            <img src={burgerLogo} alt="MrBurger" />
        </div>
    );
}

export default logo;