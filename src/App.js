import React, { Component } from 'react';
import Layout1 from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout1>
          <BurgerBuilder/>
        </Layout1>
      </div>
    );
  }
}

export default App;
