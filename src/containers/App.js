import React, { PureComponent } from 'react';

import Composer from '../components/Composer';
import Feed from '../components/Feed';
import Template from './Template';

class App extends PureComponent {
  render() {
    return (
      <Template>
        <Composer />
        <Feed />
      </Template>
    );
  }
}

export default App;
