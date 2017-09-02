import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  createNetworkInterface
} from 'react-apollo'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'

const networkInterface = createNetworkInterface({
  uri: 'localhost:3001/graphql'
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
