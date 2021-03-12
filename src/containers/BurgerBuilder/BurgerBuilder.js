import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuilderControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey];
            })
            .reduce((acc, val) => {
                return acc + val;
            });

        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = { ...this.state.ingredients };
            updatedIngredients[type] = updatedCount;
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - INGREDIENT_PRICES[type];
            this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
            this.updatePurchaseState(updatedIngredients);
        }
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert('Purchase continued!');
    }

    render() {
        const disabledControls = { ...this.state.ingredients };
        for (let key in disabledControls) {
            disabledControls[key] = disabledControls[key] <= 0;
        }

        return (
            <div>
                <Auxiliary>
                    <Modal
                        show={this.state.purchasing}
                        modalClosed={this.purchaseCancelHandler}>
                        <OrderSummary ingredients={this.state.ingredients}
                            purchaseCanceled={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler}
                        />
                    </Modal>
                    <Burger ingredients={this.state.ingredients} />
                    <BuilderControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabledControls={disabledControls}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                    ></BuilderControls>
                </Auxiliary>
            </div>
        );
    }
}

export default BurgerBuilder;
