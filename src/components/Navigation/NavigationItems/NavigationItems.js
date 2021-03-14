import React from 'react';
import NavitationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavitationItem link="/"
            active>
                Burger Builder
            </NavitationItem>
            <NavitationItem link="/">
                Checkout
            </NavitationItem>
        </ul>
    );
}

export default navigationItems;