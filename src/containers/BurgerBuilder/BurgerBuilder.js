import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuilderControls  from '../BurgerBuilder/BurgerBuilder';

class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render(){
        return (       
            <div>
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BuilderControls></BuilderControls>
            </Auxiliary>
            </div>
        )
    }    
}
 
export default BurgerBuilder;
