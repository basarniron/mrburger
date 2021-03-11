import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class BurgerBuilder extends Component{

    render(){
        return (       
            <div>
            <Auxiliary>
                <div>Burger</div>
                <div>Build Controls</div>
            </Auxiliary>
            </div>
        )
    }    
}

export default BurgerBuilder;