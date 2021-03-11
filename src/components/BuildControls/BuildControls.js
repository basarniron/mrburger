import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControl/BuildControl.css';

controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
    return (  
        <div className={classes.BuildControls}>
            {
                controls.map(ctrl => {
                    <BuildCOntrol key={ctrl.label} label={ctrl.label} />
                })
            }
        </div>
    );
}
 
export default buildControls;