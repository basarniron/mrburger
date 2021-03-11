import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';


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
            </Auxiliary>
            </div>
        )
    }    
}
 
export default BurgerBuilder;
