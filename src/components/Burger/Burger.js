import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    console.log('props.ingredients: ' + props.ingredients);

    console.log('Object.keys(props.ingredients): ' + Object.keys(props.ingredients));

    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformIngredients.length === 0) {
        transformIngredients = <div><p>Please start adding ingredients!</p></div>;
    }

    console.log(transformIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
}

export default burger;