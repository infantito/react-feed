import React, { PureComponent } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';

import Template from './Template';
import Composer from '../components/Composer';
import Feed from '../components/Feed';
import { endpoint, prodEndpoint } from '../config';

class App extends PureComponent {
  client = new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    fetchOptions: {
      link: new HttpLink(),
    },
  });

  render() {
    return (
      <Template>
        <ApolloProvider client={this.client}>
          <Composer />
          <hr />
          <Feed />
        </ApolloProvider>
      </Template>
    );
  }
}

export default App;
